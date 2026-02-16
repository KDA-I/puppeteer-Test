const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const app = express();

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
    const htmlContent = await ejs.renderFile(
      prescriptionTemplatePath,
      prescriptionData
    );
    const footerTemplate = await ejs.renderFile(footerPath);
    const headerTemplate = await ejs.renderFile(prescriptionHeaderPath, prescriptionData);
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
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
      scale: 1,
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
