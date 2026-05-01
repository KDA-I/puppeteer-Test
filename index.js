const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

const app = express();

// ─── Paths ────────────────────────────────────────────────────────────────────

const PATHS = {
  footer:                path.join(__dirname, "invoiceTemplates/components/page-footer.ejs"),
  A4InvoiceFooter:       path.join(__dirname, "InvoiceTemplateV2/components/footer.ejs"),
  emailBody:             path.join(__dirname, "emailTemplates/TreatmentSheetEmail/body.ejs"),
  invoiceBody:           path.join(__dirname, "invoiceTemplates/body.ejs"),
  treatmentSheet:        path.join(__dirname, "downloadTreatmentSheetTemplate/body.ejs"),
  prescription:          path.join(__dirname, "PrescriptionTemplates/body.ejs"),
  prescriptionHeader:    path.join(__dirname, "PrescriptionTemplates/components/header/header.ejs"),
  prescriptionFooter:    path.join(__dirname, "PrescriptionTemplates/components/footer/footer.ejs"),
  A4Invoice:             path.join(__dirname, "InvoiceTemplateV2/body.ejs"),
  thermalInvoice:        path.join(__dirname, "ThermalInvoiceTemplateV2/body.ejs"),
  data:                  path.join(__dirname, "data.js"),
};

const { invoiceData, prescriptionData, treatmentSheetData } = require(PATHS.data);

// ─── Template Cache ───────────────────────────────────────────────────────────
// Compile each EJS template once at startup, reuse on every request.

const templateCache = new Map();

function getCompiledTemplate(filePath) {
  if (templateCache.has(filePath)) return templateCache.get(filePath);
  const source = fs.readFileSync(filePath, "utf-8");
  const compiled = ejs.compile(source, { cache: true, filename: filePath });
  templateCache.set(filePath, compiled);
  return compiled;
}

function renderTemplate(filePath, data) {
  return getCompiledTemplate(filePath)(data);
}

// Pre-compile all templates at startup
Object.values(PATHS).forEach((p) => {
  if (p.endsWith(".ejs")) {
    try { getCompiledTemplate(p); } catch (_) { /* file may not exist yet */ }
  }
});

// ─── Image Base64 Cache ───────────────────────────────────────────────────────
// Avoid re-fetching the same logo on every request.

const imageCache = new Map();

function fetchImageAsBase64(url) {
  if (imageCache.has(url)) return Promise.resolve(imageCache.get(url));

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => {
        const base64 = Buffer.concat(chunks).toString("base64");
        const mimeType = response.headers["content-type"];
        const dataUri = `data:${mimeType};base64,${base64}`;
        imageCache.set(url, dataUri);
        resolve(dataUri);
      });
      response.on("error", reject);
    }).on("error", reject);
  });
}

// ─── Browser Singleton ────────────────────────────────────────────────────────

let browser;

async function getBrowser() {
  if (!browser || !browser.isConnected()) {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    });
    // If Chromium crashes, clear the reference so next call relaunches it
    browser.on("disconnected", () => { browser = null; });
  }
  return browser;
}

// ─── Page Helper ──────────────────────────────────────────────────────────────
// Always closes the page, even if pdf() throws.
// Writes to a unique tmp file to avoid concurrent-write race conditions.

async function generatePdfBuffer(setupFn) {
  const b = await getBrowser();
  const page = await b.newPage();
  // Unique output path per request → no concurrent overwrite
  const tmpPath = path.join(__dirname, `tmp_${crypto.randomUUID()}.pdf`);

  try {
    await setupFn(page, tmpPath);
    return fs.readFileSync(tmpPath);
  } finally {
    await page.close().catch(() => {});
    fs.unlink(tmpPath, () => {}); // async cleanup, non-blocking
  }
}

// ─── Middleware ───────────────────────────────────────────────────────────────

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// ─── Preview Routes ───────────────────────────────────────────────────────────

app.get("/preview/treatment-sheet", (req, res) => {
  app.set("views", path.join(__dirname, "downloadTreatmentSheetTemplate"));
  res.render("body", treatmentSheetData);
});

app.get("/preview/prescription", (req, res) => {
  app.set("views", path.join(__dirname, "PrescriptionTemplates"));
  res.render("body", prescriptionData);
});

app.get("/preview/thermal-invoice", (req, res) => {
  app.set("views", path.join(__dirname, "ThermalInvoiceTemplateV2"));
  res.render("body", invoiceData);
});

app.get("/preview/a4-invoice", (req, res) => {
  app.set("views", path.join(__dirname, "InvoiceTemplateV2"));
  res.render("body", invoiceData);
});

// ─── PDF: Treatment Sheet ─────────────────────────────────────────────────────

app.get("/generate-pdf/treatment-sheet", async (req, res) => {
  try {
    const htmlContent    = renderTemplate(PATHS.treatmentSheet,     treatmentSheetData);
    const headerTemplate = renderTemplate(PATHS.prescriptionHeader, treatmentSheetData);
    const footerTemplate = renderTemplate(PATHS.prescriptionFooter, treatmentSheetData);

    const pdfBuffer = await generatePdfBuffer(async (page, tmpPath) => {
      await page.setContent(htmlContent, { waitUntil: "networkidle0"});
      await page.pdf({
        path: tmpPath,
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate,
        footerTemplate,
        margin: { top: "120px", bottom: "70px", left: "20px", right: "20px" },
      });
    });

    res.set({ "Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=treatment-sheet.pdf" });
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating treatment-sheet PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

// ─── PDF: Prescription ────────────────────────────────────────────────────────

app.get("/generate-pdf/prescription", async (req, res) => {
  try {
    // Deep-copy so we don't mutate the cached data object
    const data = JSON.parse(JSON.stringify(prescriptionData));

    if (data.organization?.logo?.path) {
      try {
        data.organization.logo.path = await fetchImageAsBase64(data.organization.logo.path);
      } catch (err) {
        console.error("Failed to fetch logo image:", err);
      }
    }

    const htmlContent    = renderTemplate(PATHS.prescription,       data);
    const headerTemplate = renderTemplate(PATHS.prescriptionHeader, data);
    const footerTemplate = renderTemplate(PATHS.prescriptionFooter, data);

    const pdfBuffer = await generatePdfBuffer(async (page, tmpPath) => {
      await page.setContent(htmlContent, { waitUntil: "networkidle0" });
      await page.pdf({
        path: tmpPath,
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate,
        footerTemplate,
        margin: { top: "130px", bottom: "130px", left: "20px", right: "20px" },
        scale: 1,
      });
    });

    res.set({ "Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=prescription.pdf" });
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating prescription PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

// ─── PDF: Thermal Invoice ─────────────────────────────────────────────────────

app.get("/generate-pdf/thermal-invoice", async (req, res) => {
  try {
    const renderedHtml = renderTemplate(PATHS.thermalInvoice, invoiceData);

    const pdfBuffer = await generatePdfBuffer(async (page, tmpPath) => {
      await page.setViewport({ width: 273, height: 1000, deviceScaleFactor: 1 });
      await page.setContent(renderedHtml, { waitUntil: "networkidle0" });

      // Wait for fonts — no arbitrary setTimeout
      await page.evaluateHandle("document.fonts.ready");

      const bodyHandle = await page.$("body");
      if (!bodyHandle) throw new Error("Failed to get body element");
      const { height } = await bodyHandle.boundingBox();
      await bodyHandle.dispose();

      await page.pdf({
        path: tmpPath,
        width: "80mm",
        height: `${Math.ceil(height)}px`,
        preferCSSPageSize: true,
        printBackground: true,
        margin: { top: "20px", bottom: "20px", left: "20px", right: "20px" },
      });
    });

    res.set({ "Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=thermal-invoice.pdf" });
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating thermal-invoice PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

// ─── PDF: A4 Invoice ──────────────────────────────────────────────────────────

app.get("/generate-pdf/a4-invoice", async (req, res) => {
  try {
    const renderedHtml   = renderTemplate(PATHS.A4Invoice,       invoiceData);
    const footerTemplate = renderTemplate(PATHS.A4InvoiceFooter, invoiceData);

    const pdfBuffer = await generatePdfBuffer(async (page, tmpPath) => {
      await page.setContent(renderedHtml, { waitUntil: "networkidle0"  });
      await page.evaluateHandle("document.fonts.ready");

      await page.pdf({
        path: tmpPath,
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        footerTemplate,
        margin: { top: "0px", bottom: "0px", left: "0px", right: "0px" },
        scale: 1.6,
      });
    });

    res.set({ "Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=a4-invoice.pdf" });
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating a4-invoice PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────

const PORT = 4000;
app.listen(PORT, () => {
  const base = `http://localhost:${PORT}`;
  console.log(`
  Server running at ${base}

  Previews:
    ${base}/preview/treatment-sheet
    ${base}/preview/prescription
    ${base}/preview/thermal-invoice
    ${base}/preview/a4-invoice

  PDF Generation:
    ${base}/generate-pdf/treatment-sheet
    ${base}/generate-pdf/prescription
    ${base}/generate-pdf/thermal-invoice
    ${base}/generate-pdf/a4-invoice
  `);
});