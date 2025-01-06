const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const app = express();

// Path to the EJS template
const templatePath = path.join(__dirname, "invoiceTemplates", "body.ejs");
// const footerPath = path.join(__dirname, "pdfTemplates/footer", "footer.ejs");

const invoiceData = {
  organization: {
    organizationName: "RMV Multispeciality Veterinary Clinic",
    organizationAddress:
      "269, 4th Main Rd, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086",
    organizationEmail: "",
    organizationPhone: "9844598562",
    gst: "29AAKCR7132ZID7",
    thankYouMessage: "Thank you for choosing us!",
    logo: "https://i.ibb.co/7zvZwvL/logo.png",
  },

  invoiceNumber: "INV-2025-000042",
  invoiceDate: "2025-01-03",
  dueDate: "2025-01-03",
  subTotal: "343.80",
  totalAmount: "309.42",
  totalDiscountAmount: "34.38",
  roundOffAmount: "-0.42",
  amountPayable: "309.00",
  // amountPaid: "0",
  // totalDueAmount: "309.42",
  // comments: "",
  // customTerms: "",
  customerUser: {
    // id: "4ea18c3b-ba7e-4d27-8243-6b2e1771c232",
    firstName: "Karthik ",
    lastName: "DA",
    phoneNumber: "9844598562",
  },
  // consultedBy: {
  //   id: "4ea18c3b-ba7e-4d27-8243-6b2e1771c232",
  //   firstName: "Karthik ",
  //   lastName: "DA",
  // },
  pet: {
    // id: "b9679fa8-5f86-4135-9035-316a47bbd6a7",
    petNumber: "PET-073",
    petName: "notRetarded",
  },
  lineItems: [
    {
      // id: "df7eb0c9-b0dd-4e12-bd8e-7c5ded752d81",
      // itemId: "8a5b8705-bcec-4811-9f5c-bd98e2c8440f",
      itemName: "item 20",
      // categoryId: "66a037fa-5e54-4174-ae8f-d8b75a723d96",
      // categoryName: "Lab & Reports",
      // lineItemDisplayOrder: 1,
      quantity: 1,
      unitPrice: "240.00",
      // serviceFee: null,
      subTotal: "240.00",
      discount: {
        // id: "6f6ad687-9ac0-4ef9-bc5a-63780ac8fc8d",
        discountType: "MRP",
        discountValue: "50.00",
      },
      lineItemTotalAmount: "190.00",
      tax: [
        {
          code: "SGST",
          percent: "9.00",
        },
        {
          code: "CGST",
          percent: "9.00",
        },
      ],
    },
    {
      // id: "ceb11b54-a1d2-4133-9c77-ab2b7f2829f9",
      // itemId: "979655f3-6473-467c-a9f9-4f1ed42a66fc",
      itemName: "item 21",
      // categoryId: "9ccd41a4-6caa-4c7a-8ca9-2a19b653889b",
      // categoryName: "Pet shop & Supplies",
      // lineItemDisplayOrder: 2,
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
        // id: "32998166-b8fe-4f97-b336-2ca57cc5f5aa",
        discountType: "MRP",
        discountValue: "48.00",
      },
      lineItemTotalAmount: "192.00",
      tax: [
        {
          code: "SGST",
          percent: "9.00",
        },
        {
          code: "CGST",
          percent: "9.00",
        },
      ],
    },
  ],
  taxes: [
    {
      code: "SGST",
      taxRate: "9.00",
      totalTaxableAmount: "291.36",
      totalTaxAmount: "26.22",
    },
    {
      code: "CGST",
      taxRate: "9.00",
      totalTaxableAmount: "291.36",
      totalTaxAmount: "26.22",
    },
  ],
  // invoicePayments: [],
  // invoiceWriteOff: null,
  // createdAt: "2025-01-03T11:20:38.048Z",
  // updatedAt: "2025-01-03T11:20:38.048Z",
};




// Middleware to serve static files (optional if you have assets like CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "invoiceTemplates"));

// Endpoint to preview the template
app.get("/preview", (req, res) => {
  res.render("body", invoiceData);
});

// Endpoint to generate the PDF
// app.get("/generate-pdf", async (req, res) => {
//   try {
//     const htmlContent = await ejs.renderFile(templatePath, invoiceData);
//     // const footerTemplate = await ejs.renderFile(footerPath);
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(htmlContent);
//     const pdfPath = path.join(__dirname, "output.pdf");
//     await page.pdf({
//       path: pdfPath,
//       // format: "A4",
//       preferCSSPageSize: true,
//       // height:'',
//       printBackground: true,
//       // displayHeaderFooter: true,
//       // headerTemplate: `<div style="font-size: 10px; text-align: center; color: grey;">Header Content</div>`,
//       // footerTemplate,
//       margin: {
//         top: "1px",
//         bottom: "1px",
//         left: "1px",
//         right: "1px",
//       },
//     });
//     await browser.close();

//     res.download(pdfPath); // Send the PDF to the client
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     res.status(500).send("Error generating PDF");
//   }
// });

app.get("/generate-pdf", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport width to match the desired PDF width (80mm ≈ 302px)
    await page.setViewport({
      width: 302,
      height: 1000, // This will be adjusted automatically
    });

    // Render your template
    const renderedHtml = await ejs.renderFile(templatePath, invoiceData);
    await page.setContent(renderedHtml);

    // Wait for any dynamic content to load
    await page.evaluateHandle("document.fonts.ready");

    // Get the page height
    const bodyHandle = await page.$("body");
    const { height } = await bodyHandle.boundingBox();
    await bodyHandle.dispose();

    // Generate PDF with calculated dimensions
    const pdfPath = path.join(__dirname, "output.pdf");
    await page.pdf({
      path: pdfPath,
      width: "80mm",
      height: `${Math.ceil(height)}px`,
      preferCSSPageSize: true,
      printBackground: true,
      margin: {
        top: "1px",
        bottom: "1px",
        left: "1px",
        right: "1px",
      },
    });

    await browser.close();
    res.download(pdfPath);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Preview the template at: http://localhost:3000/preview");
  console.log("Generate PDF at: http://localhost:3000/generate-pdf");
});
