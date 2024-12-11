const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const app = express();

// Path to the EJS template
const templatePath = path.join(__dirname, "pdfTemplates", "body.ejs");

// "https://picsum.photos/200/300";
const treatmentSheet = {
  id: "cc7f5cea-3cdc-4e38-b8d8-9d08a4463dfd",
  title: "Sample Treatment Sheet with A Long Name",
  createdBy: {
    firstName: "Karthiik",
    lastName: "unmain",
    email: "karthik@simplivet.care",
    phoneNumber: "9844598562",
    signature: {
      originalFileName:
        "sports-car-sunset-beach-scenery-ai-2k-wallpaper-uhdpaper.com-719@1@l.jpg",
      path: "https://assets.dev.simplivet.in/4ea18c3b-ba7e-4d27-8243-6b2e1771c232/39c80e8a-1d03-4bad-aed2-42da826e7d85-sports-car-sunset-beach-scenery-ai-2k-wallpaper-uhdpaper.com-719@1@l.jpg?Expires=1733911163&Key-Pair-Id=K26714G0M1NN2R&Signature=MqBmlhYVeBkaaKxMrQMG1QhsrQN0JcJPnJYxfhYwCkhjyu1pCxFPe0LmMNNUdd7izqMtUbumizWBOYTgGdm8bZRJmBbL316HFq9IRjcHmZiDPNgugNRGoLRc0MoIZA8dVSqCdiJfjXbvsLb43I0PZIq4PMYWjY1FieH8xo1Is3wnBYeCdTpMqgO5BpSgU9wjWkW8ErQXiWc5fK7sxRddchwVfE9guNWIp~aBcrlVz1HJO95D2uEA8c6K5RA8FgyqRPw1fscD~IuyEJIDm3v1Ay2SUMzw1nQZJZKlVAbrTV7PqgJ27L~vUvBWMV4A-TSUQjVFlMhRUnCBTegXr9Ruog__",
    },
    highestDegree: "MVSc",
    workType: "Goverment academic institution",
  },
  createdAt: "2024-12-05T23:32:46.038Z",
  pet: {
    name: "Beedi Nayi",
    age: {
      years: 1,
      months: 2,
      days: 14,
    },
    weight: "10.000",
    breed: "Indie",
    species: "Dog",
    owner: {
      firstName: "Customer",
      lastName: "Two",
      phoneNumber: "0000000011",
    },
  },
  organization: {
    name: "Wow ORGANIZATION FOR REAL WOW ADASDAS ADAS ADASD SA",
    legalName: "Only Drugs pvt ltd",
    logo: {
      originalFileName: "843815.jpg",
      path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/d56a407a-034f-4af8-bf04-dc235038362f-843815.jpg?Expires=1733911163&Key-Pair-Id=K26714G0M1NN2R&Signature=SziHTHX52UfGwz7dYjMRIBjbLmhMRX6YD3CTUWNiDZPO7j9N8n7LPUo8Ehuwv2aj9ZsQ9D2GTWV84SezjOQ7dgU50ZhzEcg7VLtfHDIKSliQaQt7wejFkQ5It~Y3HZS-0pAoCKZ2KGm7O21bQKiJLNuwK5vbJjJMeRH7cVqbKNLrV4f6qYGqXjkfDMe~lvDqw~G6YJzpyG-1wtVHGkON9Huw-CsA0x30ZwEgsdJ8Qe0gSAd3SQVQKdH1sztj0RWhXHmGmzREVcHKUZuB7RLYaJWd2owC1eIH5KW2PfJi0SdBR8rsSDpwCiElnY0iaLxEalNsqzmD20Q-gUGkeefGpA__",
    },
    emergencyContactNumber: "",
    thankYouMessage: "",
    address: {
      buildingNumber: "12A",
      street: "Main Street",
      area: "Business District",
      landmark: "Near Central Park",
      cityName: "Metropolis",
      stateName: "Utopia",
      countryName: "india",
      pincode: "123456",
    },
  },
  opdId: "638c637b-f112-4d72-9ce9-10442925bfab",
  items: [
    {
      type: "CHIEF_COMPLAINT",
      data: {
        description:
          "chief complaints -Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        complaintEntries: [
          {
            date: null,
            count: null,
            comment: "vomiting",
          },
          {
            date: null,
            count: null,
            comment: "tiredness",
          },
          {
            date: null,
            count: null,
            comment: "inavtive",
          },
        ],
      },
    },
    {
      type: "EXAMINATION",
      data: {
        description:
          "on Examination- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        vitalGroup: "PARTIALLY_COMPROMISED",
        vitals: [
          {
            vitalTypeName: "Activity",
            vitalName: "Fatigued",
            customVitalValue: "Fatigued",
          },
          {
            vitalTypeName: "Abd",
            vitalName: "Pain On Palpation",
            customVitalValue: "Pain On Palpation",
          },
          {
            vitalTypeName: "RR",
            vitalName: "Hyperventilating",
            customVitalValue: "Hyperventilating",
          },
          {
            vitalTypeName: "HR",
            vitalName: "Tachycardia",
            customVitalValue: "Tachycardia",
          },
          {
            vitalTypeName: "PLN",
            vitalName: "Enlarged",
            customVitalValue: "Enlarged",
          },
          {
            vitalTypeName: "CRT",
            vitalName: "Normal (1-1 3/4 sec)",
            customVitalValue: "Normal (1-1 3/4 sec)",
          },
          {
            vitalTypeName: "CMM",
            vitalName: "Normal/ Pink",
            customVitalValue: "Normal/ Pink",
          },
          {
            vitalTypeName: "Temp",
            vitalName: "Normal",
            customVitalValue: "Normal",
          },
        ],
      },
    },
    {
      type: "INVESTIGATION",
      data: {
        items: [
          {
            name: "Blood Test and Urine Test",
            createdAt: "2024-12-05T23:31:09.695Z",
            result: {
              description: "",
              resultRecordedAt: "2024-12-11T08:56:00.000Z",
              resultItems: [
                {
                  displayName: "Blood Test",
                  resultRecordedAt: "2024-12-11T08:56:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
                },
                {
                  displayName: "Urine Test",
                  resultRecordedAt: "2024-12-11T08:56:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
                },
              ],
              resultAttachments: [
                {
                  originalFileName: "final_draft.pdf",
                  path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/44261415-9e64-42bb-b919-a3e3b4804ed5-final_draft.pdf?Expires=1733916579&Key-Pair-Id=K26714G0M1NN2R&Signature=PJVBIg6kJL6LzkpOk42anp4p4eDaFOUDXQsTS4B~FoSyivcR89gY1R8VWJrmTLRGuL0ur-2H0Co2lsTpXyU2R8w2-Pa77UDLe4tqzG2EvaPTnTwMJWccZEQm1R9iizfSTd9aVxr5f1oSN4cNni1rEllUVgxq7JgHgQkYMgVSY7oZt-wovQrN6P4Y8NxAv9qA03Fpbqls2DFihbLbAdEeu8LwL8aBPIYHByMOg~kGjyWL6lKJ32xuYO9DAJQDEhcWb8BcrmAFhZrM8QnzwXGVslmMmCNXaTATBvEO6JHS2fFw6mIql5CjjpHIobdmHJqSlgfRP6gHCqLuZ1saacRmLQ__",
                },
                {
                  originalFileName: "output.pdf",
                  path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/d22c977d-1592-411e-87c1-1e57833cfaed-output.pdf?Expires=1733916579&Key-Pair-Id=K26714G0M1NN2R&Signature=a8bqze-G2dtyDat1goZopudJggBwDhK4fg1B6nVv5lMoV9Cq5UyUhdWrNoUO6M3rtqvJVZ0WOAKF0AY0zCTEdxszKXKKCFsG-IZTNfVgaxJgsaw1Z1YP2eoixPLswJCv~KpTLzNUnM-ayKTlQBGAvefoA97TpXoG2W7AV54zpDncRH9g~dNRPwgeKMV2qm5qzJZ62UVG3aWdVKPQltXz9KnBG23fsAhhdMIWAChqvwAYOoIgEL~l7gIbFJETYfHG-dX-L~LEl5U-B3A21-0CjHdu2NDPz8KyURuAUiQiw9Go0MPmShcgt9uKaeLC0~aqtgiVQBFxIRETdVPNsQ7wqQ__",
                },
              ],
            },
            description: "",
          },
          {
            name: "CBC and WBC",
            createdAt: "2024-12-05T23:31:14.062Z",
            result: {
              description: "",
              resultRecordedAt: "2024-12-05T23:33:00.000Z",
              resultItems: [
                {
                  displayName: "CBC",
                  resultRecordedAt: "2024-12-05T23:33:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
                },
                {
                  displayName: "WBC",
                  resultRecordedAt: "2024-12-05T23:33:00.000Z",
                  result: "0",
                  referenceRange: "",
                  comments:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
                },
              ],
              resultAttachments: [
                {
                  originalFileName: "new test 04_11_2024 _ 01_49 AM.pdf",
                  path: "https://assets.dev.simplivet.in/d999ea0d-abf5-4c25-b489-1d6350921ac2/99fe7864-0c2c-4f3d-b622-203a6843a086-new%20test%2004_11_2024%20_%2001_49%20AM.pdf?Expires=1733916579&Key-Pair-Id=K26714G0M1NN2R&Signature=AwFILuHE2qe~z2pOaVTYfi1LDuNEeHBNBhfGrb9ngozz~voHBH8vtgRnK2w5pcdZd-tWCXlQHzARYLnda6Hf4O1~xP4HvkziaSnChoFUjCdAD7FYIusw9-C5Z9eSflFtDAlF2ecJa16TI-dzVyHgAjLF2LtmHtMzqGg8xuBJ~S5tJu353VRD~C~7tmIcj4XnLQpQjMZmc6c4cwJWSmSdmcP9Ra6HIe2oSFFZlp8pDT3UDAAbZqNt-RLpoa0~N9jtkZOGB5K1SGa6m1CUPpM-cb97NORhl04DrHDb5CJhKc7bUquPvx5z6qQ5wKPq1i-fYIrBvG-U8hP9i7F4zigI0Q__",
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
        description: "asdasdasdasd",
        items: [
          {
            medicationName: "Dog poison",
            medicationUnitTypeName: "Liquid / Inj (Inj)",
            description: "",
            dosage: {
              unit: "mg",
              value: "0.00",
            },
            routeOfAdministration: null,
            frequency: {
              type: null,
              value: null,
            },
            compositions: [
              {
                name: "Asparaginase",
              },
              {
                name: "MSD - Nobivac DHPPi + L",
              },
              {
                name: "MSD - Nobivac KC",
              },
              {
                name: "MSD - Nobivac DHPPi + L4",
              },
            ],
          },
          {
            medicationName: "Dolo medicine",
            medicationUnitTypeName: "Tablets (Tab)",
            description: "",
            dosage: {
              unit: "mg",
              value: "102.00",
            },
            routeOfAdministration: null,
            frequency: {
              type: "hrs",
              value: 2,
            },
            compositions: [
              {
                name: "Acetaminophen (Paracetamol)",
              },
            ],
          },
        ],
      },
    },
    {
      type: "TENTATIVE_DIAGNOSIS_AND_PROGNOSIS",
      data: {
        tentativeDiagnosis: {
          values: [
            {
              name: "Rabies",
            },
          ],
          customValue: null,
          description: "asdasdasdadsasd",
        },
        prognosis: "GUARDED",
      },
    },
    {
      type: "ADVICE",
      data: {
        title:
          "Advice -Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    },
    {
      type: "FOLLOW_UP",
      data: {
        items: [
          {
            followUpType: "FOLLOW_UP",
            followUpDate: "2024-12-06T23:32:00.000Z",
            followUpTimes: 1,
            reason: "",
            createdAt: "2024-12-05T23:32:46.002Z",
            updatedAt: "2024-12-05T23:32:46.002Z",
          },
          {
            followUpType: "FOLLOW_UP",
            followUpDate: "2024-12-07T23:32:00.000Z",
            followUpTimes: 1,
            reason: "",
            createdAt: "2024-12-05T23:32:46.002Z",
            updatedAt: "2024-12-05T23:32:46.002Z",
          },
          {
            followUpType: "NEXT_VISIT",
            followUpDate: "2024-12-13T08:55:00.000Z",
            followUpTimes: 0,
            reason:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            createdAt: "2024-12-11T08:55:31.659Z",
            updatedAt: "2024-12-11T08:55:31.659Z",
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
app.set("views", path.join(__dirname, "pdfTemplates"));

// Endpoint to preview the template
app.get("/preview", (req, res) => {
  res.render("body", treatmentSheet);
});

// Endpoint to generate the PDF
app.get("/generate-pdf", async (req, res) => {
  try {
    const htmlContent = await ejs.renderFile(templatePath, treatmentSheet);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfPath = path.join(__dirname, "output.pdf");
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      // headerTemplate: `<div style="font-size: 10px; text-align: center; color: grey;">Header Content</div>`,
      footerTemplate: `
    <div style="display:flex;justify-content:space-between; font-size: 12px; width: 100%; color: grey; margin: 0px 20px; ">
    <div style="font-weight: 600; margin:0px">Powered By <span style="color:#2aa61f">Simpli</span><span style="color:#2761c4">vet .</span><span style="color:#2aa61f"> .</span></div>
    <div><p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p><div>
    </div>
  `,
      margin: {
        top: "20px",
        bottom: "80px",
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

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Preview the template at: http://localhost:3000/preview");
  console.log("Generate PDF at: http://localhost:3000/generate-pdf");
});
