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

const invoiceData = {
  organization: {
    organizationName: "RMV Multispeciality Veterinary Clinic",
    organizationAddress:
      "269, 4th Main Rd, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086",
    organizationEmail: "EMAIL_RMV_@gmail.com",
    organizationLegalName: "RMV_LEGAL_NAME",
    organizationPhone: "9844598562",
    gst: "29AAKCR7132ZID7",
    thankYouMessage: "Thank you for choosing us!",
    logo: null,
    // "https://placehold.co/600x400",
    stateCode: "STATE_CODE_PLACEHOLDER",
  },

  invoiceNumber: "INV-2025-000042",
  invoiceDate: "2025-01-03",
  dueDate: "2025-01-03",
  subTotal: "343.80",
  totalAmount: "309.42",
  totalDiscountAmount: "34.38",
  roundOffAmount: "-0.42",
  amountPayable: "309.00",
  comments:
    "Payment is due upon receipt \nAll services are non-refundable \nThis is a computer-generated invoice and does not require a signature",
  customTerms:
    "Payment is due upon receipt \nAll services are non-refundable \nThis is a computer-generated invoice and does not require a signature",
  customerUser: {
    firstName: "Karthik ",
    lastName: "DA",
    phoneNumber: "9844598562",
    address: "ADDRESS_PLACEHOLDER",
  },
  consultedBy: {
    id: "4ea18c3b-ba7e-4d27-8243-6b2e1771c232",
    firstName: "Karthik ",
    lastName: "DA",
  },
  pet: null,
  // {
  //   petNumber: "PET-073",
  //   petName: "notRetarded",
  // },
  lineItems: [
    {
      itemName: "item 20",
      quantity: 1,
      unitPrice: "240.00",
      subTotal: "240.00",
      discount: {
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
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
    {
      itemName: "item 21",
      quantity: 1,
      unitPrice: "240.00",
      serviceFee: null,
      subTotal: "240.00",
      discount: {
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
};

const treatmentSheetData = {
  id: "b96d74c1-e95f-411e-a100-3edeee8bdd79",
  title: "Title",
  createdBy: {
    firstName: "Karthik ",
    lastName: null, //"DA",
    email: "karthik@simplivet.care",
    phoneNumber: "9844598562",
    signature: null,
    highestDegree:  "MVSc",
  },
  createdAt: "2024-11-22T21:16:17.894Z",
  pet: {
    name: "Ninja",
    age: { years: 5, months: 8, days: 4 },
    weight: "25.000",
    breed: "Belgian Malinois",
    species: "Dog",
    owner: { firstName: "Karthik", lastName: "D A", phoneNumber: "1111111111" },
  },
  organization: {
    name: "Wow HealthCare organization ",
    legalName: "",
    logo: {
      originalFileName: "images.png",
      path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/6fdc8d1d-657f-4200-88d4-bf80132973aa/6a9a7d2b-59e7-4d90-ac8c-ec88993b9cbd-images.png?Expires=1738750853&Key-Pair-Id=K26714G0M1NN2R&Signature=pH5zsWuiYntpdS4P3dNAtrbc53br1aOvgVWyrmumYyaRKxJbxJgtU8Mm89JsX0Bh7MwCX9Rzq93o4sYiTjRawGcdgkE1zGtk2AN7apn-dXcu6mk2xg3huUvc1gXAsp870stO98WG3Sf-iGAFc2WEUBV~UChIxKd2NrGJhFGNGbJz0tMv07YrtFkSC0RX9tdZgfD1b7YRESX6rfmD9pM9UiYUmEFnnPt3twh2ZEuq4X-aLkSVvaBWKUW5Da2DDoqkIOB7D3k6xaEvMBIcxwOtbIbmomvz4CATpRVxSkQwKcLOOZMn55AAp21tXQVWH8UUVSYND94LToJw~Td0Oq0yOg__",
    },
    emergencyContactNumber: "1231321231",
    thankYouMessage: "",
    address: {
      buildingNumber: "12312",
      street: "Rajiv Gandhi Road",
      area: "Atlanta Point",
      landmark: "12312312312 1 2312",
      cityName: "Sri Vijaya Puram",
      stateName: "Andaman and Nicobar Islands",
      countryName: "India",
      pincode: 744104,
    },
  },
  items: [
    {
      type: "CHIEF_COMPLAINT",
      data: {
        description:
          "chief complaints lorem ipsum sda asdnadjn jandjand jkandsjaksndkjansd ajdsnand akdjnakjdnad\nkmadajdn jsdjnas jansdjn najsn a naj najsn djna a",
        complaintEntries: [
          { date: "2024-12-10T00:00:00.000Z", count: 1, comment: "Vomiting" },
          { date: "2024-12-10T00:00:00.000Z", count: 1, comment: "Shitting" },
          { date: "2024-12-03T00:00:00.000Z", count: 1, comment: "TimePass" },
        ],
      },
    },
    {
      type: "EXAMINATION",
      data: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        vitalGroup: "PARTIALLY_COMPROMISED",
        vitals: [
          {
            vitalTypeName: "Temp",
            vitalName: "Sub Normal",
            customVitalValue: "Sub Normal",
          },
          { vitalTypeName: "CMM", vitalName: "Pale", customVitalValue: "Pale" },
          {
            vitalTypeName: "CRT",
            vitalName: "Abnormal (> 2 sec)",
            customVitalValue: "Abnormal (> 2 sec)",
          },
          {
            vitalTypeName: "PLN",
            vitalName: "Slightly enlarged",
            customVitalValue: "Slightly enlarged",
          },
          { vitalTypeName: "HR", vitalName: "NAD", customVitalValue: "NAD" },
          { vitalTypeName: "RR", vitalName: "NAD", customVitalValue: "NAD" },
          { vitalTypeName: "Abd", vitalName: "High", customVitalValue: "High" },
          {
            vitalTypeName: "Activity",
            vitalName: "Dull & depressed",
            customVitalValue: "Dull & depressed",
          },
        ],
      },
    },
    {
      type: "INVESTIGATION",
      data: {
        items: [
          {
            name: "Blood Test",
            createdAt: "2024-11-26T14:25:40.610Z",
            result: {
              description: "",
              resultRecordedAt: "2024-11-26T14:44:00.000Z",
              resultItems: [
                {
                  displayName: "Blood Test",
                  resultRecordedAt: "2024-11-26T14:44:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments: "",
                },
                {
                  displayName: "Blood Test",
                  resultRecordedAt: "2024-11-26T14:44:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments: "",
                },
              ],
              resultAttachments: [
                {
                  originalFileName: "download.pdf",
                  path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/8dd81a60-ee07-4880-9218-910477c0763b-download.pdf?Expires=1738750854&Key-Pair-Id=K26714G0M1NN2R&Signature=QGv4iUSoVX72Rzp00olFKiUmVkyrH2qEUQ9TgdUMHOFRjDROUyg6PtFKI92by90dHbXK2Q1GZdJfYL8hhjE01EasPdGkI5uXwaDWLjDyiVhwb1~2mV2q5OtNVAkVw9Oceh~gc3t40Jq4qcAo79ppDp04zNd0Ra3GCcSYnLC8rjTJfUecUvsQViDdYbvvaNTthRl0CGXeVMrAWVYFHNUTn9Fc17h78~u187Nd8K2RnZYqZOp35I~zkZRBzuZUXapBk9MlxQGBnKPgYz~MklEnl64FueZnXwgKsDR3MoiW4IhiR94bCZ~PHF6DjS~IofPN4ApOHr0EEp3PFmGNFhKNbQ__",
                },
              ],
            },
            description: "",
          },
          {
            name: "Urine Test",
            createdAt: "2024-11-26T14:25:54.496Z",
            result: {
              description: "",
              resultRecordedAt: "2024-11-26T14:26:00.000Z",
              resultItems: [
                {
                  displayName: "Urine Test",
                  resultRecordedAt: "2024-11-26T14:26:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments: "",
                },
              ],
              resultAttachments: [
                {
                  originalFileName: "madonna-signature-with-background.png",
                  path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/da36d006-783b-4e25-bf2c-db29bb20b2ec-madonna-signature-with-background.png?Expires=1738750854&Key-Pair-Id=K26714G0M1NN2R&Signature=bXjwaHMnvugoVs-oHt2-q34XyppJC2v0tjHY7tv7KG7x3faPOBZR5OircCvljGw4nv9QRaVIxwgIYUMwY2v~M0D-OZwNBg-t8SdB8wPYuHiYGa9lqwS2so-alsR5fqWQYL8D1E8W7Q82ElFhE7g5RvKhv58oUbzH089FOk8xsajGgeguCebUIWJng7~GXmR2sqqoPlu~0sdnUA0al20YVPYFpHKUH0x5ywB89ggUB1xUnioYC3vUl-xE8vNmAuDBdYOq3nYY0coZ8tfNHzpt4t0UEYQEQyTQqkKH~PQHg10dGmuufULiePAvX87o9ebZIPtBAAMWPz-HtoGABtW63A__",
                },
                {
                  originalFileName: "monk.jpeg",
                  path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/de70060b-4027-4188-b307-74d75dec7fbf-monk.jpeg?Expires=1738750854&Key-Pair-Id=K26714G0M1NN2R&Signature=wnAF8yhGaJmCoaJV8XT0rusTgMy6MkSBvSpnIyUj0Up2fqb~ERYEm303V7zpu4qwKHo5sIrDxOgqdYbKejWYsIE~OoKNgmgPYzWsMd3LuUdrz6EgDKw1hpSWT6u237uDinsFIw4-ex1hWXenfjfZsY0qxfoJbgVyUFUaJYVzrudkwNfFtZNPKBRS0ImJGIRcWM4gQdi-hh8Wrph-WMBoP3MRXstNjCxViXRSk2~H2jdM1-ousuZr7HzunvMmInSSkJyHCLiQa5By5xOrgzKhS0D2-cNXGKXCshGwiDfWNEPzPK1yJ9HTedwHQsK9OHqtyh96hwZ~g3H5MOahzcYLpw__",
                },
              ],
            },
            description: "",
          },
        ],
      },
    },
    {
      type: "MEDICATION",
      data: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        items: [
          {
            medicationName: "Dolo medicine",
            medicationUnitTypeName: "Tablets (Tab)",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            dosage: { unit: "mg", value: "100.00" },
            routeOfAdministration: null,
            frequency: { type: "hrs", value: 2 },
            compositions: [{ name: "Acetaminophen (Paracetamol)" }],
          },
        ],
      },
    },
    {
      type: "TENTATIVE_DIAGNOSIS_AND_PROGNOSIS",
      data: {
        tentativeDiagnosis: {
          values: [
            { name: "Acetaminophen Toxicity" },
            { name: "Anaphylaxis" },
            { name: "Arterial Thromboembolism (ATE)" },
            { name: "Spider Bite-Black Widow" },
          ],
          customValue: null ,//"hello world"
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        prognosis: "VERY_GOOD",
      },
    },
    {
      type: "ADVICE",
      data: {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    },
    {
      type: "FOLLOW_UP",
      data: {
        items: [
          {
            followUpType: "FOLLOW_UP",
            followUpDate: "2024-12-12T14:51:00.000Z",
            followUpTimes: 3,
            reason:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            createdAt: "2024-12-11T14:51:53.656Z",
            updatedAt: "2024-12-11T14:51:53.656Z",
          },
          {
            followUpType: "FOLLOW_UP",
            followUpDate: "2024-12-13T14:51:00.000Z",
            followUpTimes: 3,
            reason:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            createdAt: "2024-12-11T14:51:53.656Z",
            updatedAt: "2024-12-11T14:51:53.656Z",
          },
          {
            followUpType: "FOLLOW_UP",
            followUpDate: "2024-12-14T14:51:00.000Z",
            followUpTimes: 3,
            reason:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            createdAt: "2024-12-11T14:51:53.656Z",
            updatedAt: "2024-12-11T14:51:53.656Z",
          },
          {
            followUpType: "NEXT_VISIT",
            followUpDate: "2024-12-16T14:51:00.000Z",
            followUpTimes: 0,
            reason:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            createdAt: "2024-12-11T14:51:53.656Z",
            updatedAt: "2024-12-11T14:51:53.656Z",
          },
        ],
      },
    },
  ],
};
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
});
