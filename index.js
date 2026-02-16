const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const app = express();
const https = require('https');

function fetchImageAsBase64(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const base64 = buffer.toString('base64');
        const mimeType = response.headers['content-type'];
        resolve(`data:${mimeType};base64,${base64}`);
      });
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Path to the EJS template
// const templatePath = path.join(__dirname, "invoiceTemplates", "body.ejs");
const footerPath = path.join(
  __dirname,
  "invoiceTemplates/components",
  "page-footer.ejs"
);
const dataPath = path.join(__dirname, "data.js");

const emailBody = path.join(
  __dirname,
  "emailTemplates/TreatmentSheetEmail",
  "body.ejs"
);

const templatePath = path.join(__dirname, "invoiceTemplates", "body.ejs");

const treatmentSheetTemplatePath = path.join(
  __dirname,
  "downloadTreatmentSheetTemplate",
  "body.ejs"
);

const prescriptionTemplatePath = path.join(
  __dirname,
  "PrescriptionTemplates",
  "body.ejs"
);

const prescriptionHeaderPath = path.join(
  __dirname,
  "PrescriptionTemplates/components/header",
  "header.ejs"
);
const prescriptionFooterPath = path.join(
  __dirname,
  "PrescriptionTemplates/components/footer",
  "footer.ejs"
);

const invoiceData = require(dataPath).invoiceData;

const prescriptionData = require(dataPath).prescriptionData;

const treatmentSheetData = require(dataPath).treatmentSheetData;  
// Middleware to serve static files (optional if you have assets like CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the view engine
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "emailTemplates/TreatmentSheetEmail"));
app.set("views", path.join(__dirname, "downloadTreatmentSheetTemplate"));

// Endpoint to preview the template
app.get("/preview", (req, res) => {
  res.render("body", treatmentSheetData);
});

// Endpoint to generate the PDF
app.get("/generate-pdf", async (req, res) => {
  try {
    const htmlContent = await ejs.renderFile(
      treatmentSheetTemplatePath,
      treatmentSheetData
    );
    const footerTemplate = await ejs.renderFile(footerPath);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfPath = path.join(__dirname, "output.pdf");
    await page.pdf({
      path: pdfPath,
      format: "A4",
      // preferCSSPageSize: true,
      // height:'',
      printBackground: true,
      displayHeaderFooter: true,
      // headerTemplate: `<div style="font-size: 10px; text-align: center; color: grey;">Header Content</div>`,
      footerTemplate,
      margin: {
        top: "20px",
        bottom: "70px",
        left: "20px",
        right: "20px",
      },
    
    });
    await browser.close();

    res.download(pdfPath); // Send the PDF to the client
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

app.set("views", path.join(__dirname, "PrescriptionTemplates"));
app.get("/preview/prescription", (req, res) => {
  res.render("body", prescriptionData);
});

app.get("/generate-pdf/prescription", async (req, res) => {
  try {
    // Create a deep copy of the data to avoid modifying the original
    const prescriptionDataCopy = JSON.parse(JSON.stringify(prescriptionData));

    if (prescriptionDataCopy.organization?.logo?.path) {
        try {
            const base64Logo = await fetchImageAsBase64(prescriptionDataCopy.organization.logo.path);
            prescriptionDataCopy.organization.logo.path = base64Logo;
             console.log("Image converted to base64 successfully", base64Logo);
        } catch (error) {
            console.error("Failed to fetch image:", error);
            // Fallback or handle error as needed, maybe leave original URL or set to null
        }
    }

    const htmlContent = await ejs.renderFile(
      prescriptionTemplatePath,
      prescriptionDataCopy
    );
    const footerTemplate = await ejs.renderFile(prescriptionFooterPath, prescriptionDataCopy);
    const headerTemplate = await ejs.renderFile(prescriptionHeaderPath, prescriptionDataCopy);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfPath = path.join(__dirname, "output.pdf");
    await page.pdf({  
      path: pdfPath,
      format: "A4",
      // preferCSSPageSize: true,
      // height:'',
      printBackground: true,
      displayHeaderFooter: true,
      // headerTemplate: `<div style="font-size: 10px; text-align: center; color: grey;">Header Content</div>`,
      footerTemplate,
      headerTemplate,
      margin: {
        top: "130px",
        bottom: "130px",
        left: "20px",
        right: "20px",
      },
      scale: 1.5,
    });
    await browser.close();

    res.download(pdfPath); // Send the PDF to the client
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
}); 

// app.get("/generate-pdf", async (req, res) => {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Set viewport width to match the desired PDF width (80mm ≈ 302px)
//     await page.setViewport({
//       width: 302,
//       height: 1000, // This will be adjusted automatically
//     });

//     // Render your template
//     const renderedHtml = await ejs.renderFile(templatePath, invoiceData);
//     await page.setContent(renderedHtml);

//     // Wait for any dynamic content to load
//     await page.evaluateHandle("document.fonts.ready");

//     // Get the page height
//     const bodyHandle = await page.$("body");
//     const { height } = await bodyHandle.boundingBox();
//     await bodyHandle.dispose();

//     // Generate PDF with calculated dimensions
//     const pdfPath = path.join(__dirname, "output.pdf");
//     await page.pdf({
//       path: pdfPath,
//       width: "80mm",
//       height: `${Math.ceil(height)}px`,
//       preferCSSPageSize: true,
//       printBackground: true,
//       margin: {
//         top: "1px",
//         bottom: "1px",
//         left: "1px",
//         right: "1px",
//       },
//     });

//     await browser.close();
//     res.download(pdfPath);
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     res.status(500).send("Error generating PDF");
//   }
// });

// app.get("/generate-pdf", async (req, res) => {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Set viewport width to match the desired PDF width (80mm ≈ 302px)
//     await page.setViewport({
//       width: 302,
//       height: 1000, // This will be adjusted automatically
//     });

//     // Render your template
//     const renderedHtml = await ejs.renderFile(emailBody, invoiceData);
//     await page.setContent(renderedHtml);

//     // Wait for any dynamic content to load
//     await page.evaluateHandle("document.fonts.ready");

//     // Get the page height
//     const bodyHandle = await page.$("body");
//     const { height } = await bodyHandle.boundingBox();
//     await bodyHandle.dispose();

//     // Generate PDF with calculated dimensions
//     const pdfPath = path.join(__dirname, "output.pdf");
//     await page.pdf({
//       path: pdfPath,
//       width: "80mm",
//       height: `${Math.ceil(height)}px`,
//       preferCSSPageSize: true,
//       printBackground: true,
//       margin: { top: "1px", bottom: "1px", left: "1px", right: "1px" },
//     });
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     res.status(500).send("Error generating PDF");
//   }
// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Preview the template at: http://localhost:3000/preview");
  console.log("Generate PDF at: http://localhost:3000/generate-pdf");
  console.log("Generate PDF at: http://localhost:3000/generate-pdf/prescription");
});
