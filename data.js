const invoiceData = {
  currencySymbol: '₹',
  createdBy: {
    firstName: 'Vivek',
    lastName: 'Janardhan'
  },
  organization: {
    organizationName: 'ZION PETS CLINIC',
    organizationAddress: 'fsdfsf, adgsdg, fsdfsf, Bangalior, sfsdfs, India, 560086',
    organizationEmail: 'vivek@simplivet.in',
    organizationLegalName: null,
    organizationPhone: '8105441689',
    organizationWebsite: null,
    gst: '29AAFCH7821P1ZK',
    thankYouMessage: 'Thank you for choosing us!',
    logo: null,
    stateCode: '29',
    isTaxesEnabled: false,
    invoiceSetting: 'MANUAL'
  },
  customerUser: {
    firstName: 'Vivek',
    lastName: 'Janardhan',
    phoneNumber: '8105441689',
    email: 'vivi.football@gmail.com',
    address: 'no.6 lakshimi nagar vadakku thottam, Rg Pudur, Coimbatore, Tamil Nadu, India, 641062',
    placeOfSupply: 'Karnataka (29)'
  },
  consultedBy: {
    id: 'a9aa3dd5-f769-4a50-a135-ea4f7cab702d',
    firstName: 'Vivek',
    lastName: 'Janardhan',
    qualificationToDisplay: 'Orthopaedic Surgery'
  },
  pet: null,
  isComputerGenerated: false,
  invoiceNumber: 'INV-26/27-000016',
  invoiceDate: '2026-05-03',
  dueDate: '2026-05-03',
  subTotal: '4000.00',
  overAllDiscount: {
    amount: '0.00',
    type: 'PERCENTAGE',
    value: '0.00'
  },
  totalAmountAfterDiscount: '4000.00',
  roundOffAmount: '0.00',
  totalAmountAfterRoundOff: '4000.00',
  creditsApplied: null,
  totalAmountAfterDiscountAndCreditsApplied: '4000.00',
  totalAmountPaid: '0',
  totalWriteOffAmount: null,
  amountPayable: '4000',
  amountPayableInWords: 'Rupees Four Thousand Only',
  comments: '',
  customTerms: '',
  lineItems: [
    {
      itemName: 'test service rerererere 1',
      hsnCode: null,
      sacCode: null,
      quantity: '5.000',
      batches: null,
      unitPrice: '1000.00',
      rateExcludingTax: '833.33',
      discount: {
        discountType: 'PERCENTAGE',
        discountValue: '20.00',
        discountAmount: '1000.00',
        discountAmountPerUnit: '200.00'
      },
      taxableValuePerUnitAfterDiscount: '633.33',
      taxes: [
        {
          code: 'CGST',
          percent: '10.00',
          taxValue: '83.33',
          taxValuePerUnit: '83.33',
          taxValuePerLineItemQuantity: '416.67'
        },
        {
          code: 'SGST',
          percent: '10.00',
          taxValue: '83.33',
          taxValuePerUnit: '83.33',
          taxValuePerLineItemQuantity: '416.67'
        }
      ],
      lineItemTotalAmount: '4000.00'
    }
  ],
  taxSummary: {
    taxableValueExcludingGST: '3333.33',
    gstGroups: [
      {
        totalTaxPercent: '20.00',
        totalTaxAmount: '666.66',
        taxableAmount: '3333.33',
        components: [
          {
            code: 'SGST',
            percent: '10.00',
            taxAmount: '333.33'
          },
          {
            code: 'CGST',
            percent: '10.00',
            taxAmount: '333.33'
          }
        ]
      }
    ],
    totalGST: '666.66',
    totalInvoiceValueIncludingGST: '4000.00'
  }
};


const treatmentSheetData = {
  primaryColor: '#2761c4',
  id: '95dfd1aa-ba23-4157-94c9-43044a9a3858',
  title: 'Fever and Fracture',
  prescriptionNumber: null,
  showChipLegend: false,
  createdBy: {
    name: "Karthik DA",
    email: null,
    phoneNumber: '6666666666',
    signature: {
      originalFileName: 'signature-noun-paperwork-f16750cd_1.webp',
      path: 'https://assets.dev.simplivet.in/fbd0825b-b522-4ab9-b4c0-b91ae8f82303/ddb5dd53-a683-4be6-a8f9-00117d1bf11d-signature-noun-paperwork-f16750cd_1.webp?Expires=1773397841&Key-Pair-Id=K26714G0M1NN2R&Signature=gwh8srOVPU6rlfyVlmadqDDBWRVFNkhcw~KhcxPBPe0dcGtExPQKXrF21z6dcEyKF3Dm9~UQFEOKxLNPUsGBc46XRasSFrU9w7FCuFwQnyjF0mY4NkIJtYdwNJlP-zQKLrL8NZMC-91i7JWFPSeub~Allpfh8joTVxPKl0PnrvmjEHbkRDHp64oj6cFKTRqdS-ZIkB2VNyRRT1d1PVXWJv-ytPBpIcRi-qwdZtwD6AybVJQ4KTLPuei5RCIVmmTHHhr6BWtnAN9xmzgG1lZ7EOuqcA~GPCPRAXPE547SLx3zOLp0FRu5A5ncnbsLyxKcie81K4Asg57OsuDXnksgfQ__'
    },
    highestDegree: 'PHD\nSecond line\nThird line'
  },
  createdAt: '2026-03-12T04:04:19.389Z',
 pet: {
    name: "Ninja smint",
    age: { years: 5, months: 8, days: 4 },
    weight: "25.000",
    breed: "Belgian Malinois Malinois Malinois",
    species: "Dog",
    owner: { firstName: "Karthik ", lastName: "D A", phoneNumber: "1111111111", email: null },
    updatedAt: "2024-11-22T21:16:17.894Z",
    weightChange:'+0.1999999999999993'
  },
  organization: {
    name: 'MB Clinic ',
    legalName: 'MB Clinic',
    logo: {
      originalFileName: 'splendor-yellowstone-images-34-mb-260nw-2346869823.webp',
      path: 'https://assets.dev.simplivet.in/734c9f4c-74d3-456b-b678-4e5931b30baf/3209543b-1f81-45f7-9740-bd949e701058/de14333d-01c1-41cb-add6-84f41ca8c480-splendor-yellowstone-images-34-mb-260nw-2346869823.webp?Expires=1773397841&Key-Pair-Id=K26714G0M1NN2R&Signature=IEGJpOY~eqF2nkNSjQUWoGA~yHqA7gmAc1toI6GKmEQuLb3ujFfiCq0T60P4HZadQpanyqxsVDomKFYc75eWq7Ztxdei5hWxsvG~WlXfOtGoQTU4Q74HW3X5juwT9uDl63cGhuAa0etqwhZMTeMQYyqWeKtHxrn3j4A9s2ypCrPDYNtkkLr729vbQVknBhxXoT~VaabJx~rsU9tyxk~eDxoZDt5NAcHPTEHRR9VeGOUY7ZJbb8GHXpRswBg2ZYpyzhIOxc-OkQ~WzvRhejmVvwkJloQ4cr~l7vqDOug9VVc1-P1sHV6FgB4ROgSZ77x~U~vxRKx7ZgeTCrge7boymQ__'
    },
    emergencyContactNumber: '0442222225',
    thankYouMessage: 'Thank you for choosing Muresh Balaji pet care',
    address: {
      buildingNumber: '11B',
      street: 'MG Road',
      area: 'indiranagar',
      landmark: 'bus stop',
      cityName: 'Bengaluru',
      stateName: 'Karnatakaa',
      countryName: 'India',
      pincode: 560038
    }
  },
  items: [
    {
      type: 'CHIEF_COMPLAINT',
      data: {
        description: 'The pet was hit by a car 2 days ago and he is vomiting from past 2 days.',
        complaintEntries: [
          {
            date: '2026-03-12T00:00:00.000Z',
            count: 2,
            comment: 'Vomiting'
          },
          {
            date: null,
            count: null,
            comment: 'Pain'
          },
          {
            date: '2026-03-01T00:00:00.000Z',
            count: null,
            comment: ' Not Eating Anything'
          }
        ]
      }
    },
    {
      type: 'EXAMINATION',
      data: {
        description: 'The pet was hit by a car 2 days ago and he is vomiting from past 2 days.',
        vitalGroup: 'PARTIALLY_COMPROMISED',
        vitals: [
          {
            vitalTypeName: 'Temp',
            vitalName: 'Normal',
            customVitalValue: 'Normal'
          },
          {
            vitalTypeName: 'CMM',
            vitalName: 'Normal/ Pink',
            customVitalValue: 'Normal/ Pink'
          },
          {
            vitalTypeName: 'CRT',
            vitalName: 'Normal (1-1 3/4 sec)',
            customVitalValue: 'Normal (1-1 3/4 sec)'
          },
          {
            vitalTypeName: 'PLN',
            vitalName: 'NAD',
            customVitalValue: 'NAD'
          },
          {
            vitalTypeName: 'HR',
            vitalName: 'Normal',
            customVitalValue: 'Normal'
          },
          {
            vitalTypeName: 'RR',
            vitalName: 'Normal',
            customVitalValue: 'Normal'
          },
          {
            vitalTypeName: 'Abd',
            vitalName: 'Pain On Palpation',
            customVitalValue: 'Pain On Palpation'
          },
          {
            vitalTypeName: 'Activity',
            vitalName: 'Active',
            customVitalValue: 'Active'
          }
        ]
      }
    },
    {
      type: 'INVESTIGATION',
      data: {
        items: [
          {
            name: 'blood test ',
            createdAt: '2026-03-13T09:09:45.050Z',
            result: null,
            ownerStatus: 'CONFIRMED',
            description: 'The following medications have been prescribed .'
          },
          {
            name: 'Check Lab Test 1 and blood test 1',
            createdAt: '2026-03-13T09:09:46.294Z',
            result: {
              description: '',
              resultRecordedAt: '2026-03-13T09:11:00.000Z',
              resultItems: [
                {
                  displayName: 'Check Lab Test 1',
                  resultRecordedAt: '2026-03-13T09:11:00.000Z',
                  result: '0',
                  referenceRange: '',
                  comments:
                    'The following medications have been prescribed based on the clinical findings. Please administer '
                },
                {
                  displayName: 'blood test 1',
                  resultRecordedAt: '2026-03-13T09:11:00.000Z',
                  result: '0',
                  referenceRange: '',
                  comments:
                    'The following medications have been prescribed based on the clinical findings. Please administer '
                },
                {
                  displayName: 'MB- Blood Test',
                  resultRecordedAt: '2026-03-13T09:11:00.000Z',
                  result: '0',
                  referenceRange: '',
                  comments:
                    'The following medications have been prescribed based on the clinical findings. Please administer '
                },
                {
                  displayName: 'blood test ',
                  resultRecordedAt: '2026-03-13T09:11:00.000Z',
                  result: '0',
                  referenceRange: '',
                  comments:
                    'The following medications have been prescribed based on the clinical findings. Please administer '
                }
              ],
              resultAttachments: []
            },
            ownerStatus: 'RECOMMENDED',
            description:
              'The following medications have been prescribed based on the clinical findings. Please administer'
          }
        ]
      }
    },
    {
      type: 'MEDICATION',
      data: {
        description:
          'The following medications have been prescribed based on the clinical findings. Please administer as directed and complete the full course of treatment.',
        items: [
          {
            medicationName: 'item Dolo 650',
            medicationUnitTypeName: 'Tablets',
            description:
              'The following medications have been prescribed based on the clinical findings. Please administer ',
            dosage: {
              unit: 'mg',
              value: '2.00'
            },
            routeOfAdministration: 'I/V',
            frequency: {
              type: 'hrs',
              value: 2
            },
            compositions: [
              {
                name: 'Acetaminophen (Paracetamol)'
              }
            ]
          },
          {
            medicationName: 'prod item 19',
            medicationUnitTypeName: 'Tablets',
            description:
              'The following medications have been prescribed based on the clinical findings. Please administer ',
            dosage: {
              unit: 'mg',
              value: '3.00'
            },
            routeOfAdministration: 'S/C',
            frequency: {
              type: 'hrs',
              value: 2
            },
            compositions: [
              {
                name: 'Acetaminophen (Paracetamol)'
              }
            ]
          },
          {
            medicationName: 'para item 41',
            medicationUnitTypeName: 'Tablets',
            description:
              'The following medications have been prescribed based on the clinical findings. Please administer ',
            dosage: {
              unit: 'mg',
              value: '1.00'
            },
            routeOfAdministration: 'Topical',
            frequency: {
              type: 'days',
              value: 2
            }
          }
        ]
      }
    },
    {
      type: 'TENTATIVE_DIAGNOSIS_AND_PROGNOSIS',
      data: {
        tentativeDiagnosis: {
          values: [
            {
              name: 'Anticoagulant Rodenticide Toxicity'
            },
            {
              name: 'Acute respiratory distress syndrome (ARDS)'
            },
            {
              name: 'Arterial Thromboembolism (ATE)'
            }
          ],
          customValue: null,
          description:
            'The following medications have been prescribed based on the clinical findings. Please administer as directed and complete the full course of treatment.'
        },
        prognosis: 'POOR'
      }
    },
    {
      type: 'ADVICE',
      data: {
        title:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pre'
      }
    },
    {
      type: 'FOLLOW_UP',
      data: {
        isFollowUpRequired: true,
        items: [
          {
            followUpType: 'FOLLOW_UP',
            followUpDate: '2026-04-01T04:30:00.000Z',
            followUpTimes: 1,
            instructions: 'instructions',
            followUpReason: 'reason 1',
            followUpInstruction: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            createdAt: '2026-03-12T04:04:19.362Z',
            updatedAt: '2026-03-12T04:04:19.362Z'
          },
            {
            followUpType: 'FOLLOW_UP',
            followUpDate: '2026-04-02T04:30:00.000Z',
            followUpTimes: 1,
            instructions: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            followUpReason: 'reason 1',
            followUpInstruction: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            createdAt: '2026-03-12T04:04:19.362Z',
            updatedAt: '2026-03-12T04:04:19.362Z'
          },  {
            followUpType: 'FOLLOW_UP',
            followUpDate: '2026-04-03T04:30:00.000Z',
            followUpTimes: 1,
            instructions: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            followUpReason: 'reason 1',
            followUpInstruction: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            createdAt: '2026-03-12T04:04:19.362Z',
            updatedAt: '2026-03-12T04:04:19.362Z'
          }
        ]
      }
    }
  ]
};


const prescriptionData = {
  primaryColor: '#2761c4',
  id: "b96d74c1-e95f-411e-a100-3edeee8bdd79",
  showChipLegend: true,
  title: "Veterinary Prescription Titile",
  notes: "Patient presents with localized skin irritation on the lower back. Mild redness and scaling observed. No fever. Appetite and activity levels are normal. Recommended topical and oral treatment.",
  createdBy: {
    name: "Karthik DA",
    email: "karthik@simplivet.care",
    phoneNumber: "9844598562",
    signature: null,
    highestDegree:  "MVSc\n DABVP (Canine & Feline Practice)\n",
  },
  createdAt: "2024-11-22T21:16:17.894Z",
  prescriptionNumber: "RX-2026-001542",
  pet: {
    name: "Ninja smint",
    age: { years: 5, months: 8, days: 4 },
    weight: "25.000",
    breed: "Belgian Malinois Malinois Malinois",
    species: "Dog",
    owner: { firstName: "Karthik ", lastName: "D A", phoneNumber: "1111111111", email: null },
    updatedAt: "2024-11-22T21:16:17.894Z",
    weightChange:'+0.1999999999999993'
  },
  organization: {
    name: "Wow HealthCare organization ",
    legalName: "",
    logo: {
      originalFileName: "images.png",
      path:"https://i.ibb.co/F4bCPg6f/sam.jpg"
      // path: "https://fastly.picsum.photos/id/237/200/200.jpg?hmac=zHUGikXUDyLCCmvyww1izLK3R3k8oRYBRiTizZEdyfI"
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
  // items: [
  //   {
  //     isGeneric: false,
  //     medicationName: ' Isavuconazonium Sulfate',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   },
  //   {
  //     isGeneric: false,
  //     medicationName: 'Ombitasvir/Paritaprevir/Ritonavir + Dasabuvir',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'second item to test',
  //     lineItemDisplayOrder: 1
  //   },
  //   {
  //     isGeneric: false,
  //     medicationName: 'SGLT2 Inhibitors: Dapagliflozin, Empagliflozin, Canagliflozin',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake.',
  //     lineItemDisplayOrder: 1
  //   },
  //    {
  //     isGeneric: true,
  //     medicationName: ' 4 Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: '',
  //     lineItemDisplayOrder: 1
  //   },
  //    {
  //     isGeneric: false,
  //     medicationName: ' 5 Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: ' 6 Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: 'Botulinum Toxins: OnabotulinumtoxinA, AbobotulinumtoxinA, RimabotulinumtoxinB, IncobotulinumtoxinA',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: '',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: ' 8 Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: ' 9 Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: '10  Amoxicillin Syrup 60 ml ',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: 'Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }, {
  //     isGeneric: false,
  //     medicationName: 'Amoxicillin Syrup 60 ml',
  //     unitType: 'Syrup',
  //     dose: '50.00',
  //     doseUnit: 'Capsule',
  //     route: 'Intravenously (I/V)',
  //     frequency: 'Twice Daily (BID)',
  //     intake: "After Food",
  //     forDays: 7,
  //     doNotSubstitute: true,
  //     instructions: 'Give after food. Ensure adequate water intake. and test update',
  //     lineItemDisplayOrder: 1
  //   }
  // ]
    items: [
    {
      isGeneric: false,
      medicationName: 'Prescription test 3',
      unitType: 'Tablets',
      dose: '10.00',
      doseUnit: 'Tablet',
      route: 'Orally/Through the Mouth',
      frequency: 'Morning - Afternoon - Night',
      intake: 'A/F',
      forDays: 7,
      doNotSubstitute: false,
      instructions: 'Andaman and Nicobar Islands Andaman and Nicobar Islands Andaman and Nicobar IslandsAndaman and Nicobar Islands Andaman and Nicobar Islands',
      lineItemDisplayOrder: 1
    }
  ]

  
}

const invoiceV1Data = {
  currencySymbol: '₹',
  organization: {
    organizationName: "RMV Multispeciality Veterinary Clinic",
    organizationAddress:
      "269, 4th Main Rd, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086",
    organizationEmail: "EMAIL_RMV_@gmail.com",
    organizationLegalName: "RMV_LEGAL_NAME",
    organizationPhone: "9844598562",
    gst: "29AAKCR7132ZID7",
    thankYouMessage: "Thank you for choosing us!⚠️⚠️⚠️⚠️⚠️⚠️⚠️",
    logo: "https://placehold.co/600x400",
    // "https://placehold.co/600x400",
    stateCode: "29",
    emergencyContact: "9844598562"
  },
  isTaxesEnabled: true,
  isComputerGenerated: true,
  placeOfSupply: "Karnataka (29)",
  invoiceNumber: "INV-2025-000042",
  invoiceDate: "2025-01-03",
  dueDate: "2025-01-03",
  subTotal: "6050.00",              // 3800 + 2250
  totalDiscountAmount: "588.00",    // 383 + 205
  totalAmount: "5462.00",           // 3417 + 2045
  roundOffAmount: "0.00",
  amountPayable: "5462.00",
  comments:
    "Payment is due upon receipt \nAll services are non-refundable \nThis is a computer-generated invoice and does not require a signature",
  customTerms:
    "Payment is due upon receipt \nAll services are non-refundable \nThis is a computer-generated invoice and does not require a signature",
  customerUser: {
    firstName: "Karthik ",
    lastName: "DA",
    phoneNumber: "9844598562",
    email:"dummy@example.com",
    address: "269, 4th Main Rd, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086"
  },
  consultedBy: {
    id: "4ea18c3b-ba7e-4d27-8243-6b2e1771c232",
    firstName: "Karthik ",
    lastName: "DA",
    highestDegree: 'B.V.Sc. & A.H., M.V.Sc.\nPHD\nSecond line\nThird line'
  },
  pet:   {
    petNumber: "PET-073",
    petName: "notRetarded",
    petAge: { years: 5, months: 8, days: 4 },
    petWeight: "25.000",
    petBreed: "Belgian Malinois",
    petSpecies: "Dog",
    petGender: 'MALE'
  },
  createdBy:{
    name: "Karthik DA",
  },

  lineItems : [
  {
    itemName: "Paracetamol 500mg Tablets",
    quantity: 2,
    unitPrice: "120.00",
    subTotal: "240.00",
    discount: {
      discountType: "MRP",
      discountValue: "20.00",
    },
    lineItemTotalAmount: "220.00",
    tax: [
      { code: "SGST", percent: "6.00" },
      { code: "CGST", percent: "6.00" },
    ],
    hsn: "3004",
    batches: [
      {
        batchNumber: "PCM-001",
        expiryDate: "2026-03-31",
        quantity: 1,
      },
      {
        batchNumber: "PCM-002",
        expiryDate: "2026-08-31",
        quantity: 1,
      },
    ],
  },
  {
    itemName: "Vitamin C Tablets",
    quantity: 1,
    unitPrice: "180.00",
    subTotal: "180.00",
    discount: {
      discountType: "MRP",
      discountValue: "18.00",
    },
    lineItemTotalAmount: "162.00",
    tax: [
      { code: "SGST", percent: "9.00" },
      { code: "CGST", percent: "9.00" },
    ],
    hsn: "2106",
  },
  {
    itemName: "Hand Sanitizer 500ml",
    quantity: 3,
    unitPrice: "150.00",
    subTotal: "450.00",
    discount: {
      discountType: "MRP",
      discountValue: "50.00",
    },
    lineItemTotalAmount: "400.00",
    tax: [
      { code: "SGST", percent: "9.00" },
      { code: "CGST", percent: "9.00" },
    ],
    hsn: "3808",
  },
  {
    itemName: "Consultation Fee",
    quantity: 1,
    unitPrice: "500.00",
    serviceFee: "50.00",
    subTotal: "550.00",
    discount: {
      discountType: "FLAT",
      discountValue: "0.00",
    },
    lineItemTotalAmount: "550.00",
    tax: [
      { code: "SGST", percent: "9.00" },
      { code: "CGST", percent: "9.00" },
    ],
    hsn: "9983",
  },
  {
    itemName: "Blood Test Package",
    quantity: 1,
    unitPrice: "1200.00",
    subTotal: "1200.00",
    discount: {
      discountType: "FLAT",
      discountValue: "200.00",
    },
    lineItemTotalAmount: "1000.00",
    tax: [
      { code: "IGST", percent: "18.00" },
    ],
    hsn: "9985",
  },
  {
    itemName: "Glucose Powder 1kg",
    quantity: 2,
    unitPrice: "90.00",
    subTotal: "180.00",
    discount: {
      discountType: "MRP",
      discountValue: "10.00",
    },
    lineItemTotalAmount: "170.00",
    tax: [
      { code: "SGST", percent: "2.50" },
      { code: "CGST", percent: "2.50" },
    ],
    hsn: "1702",
    batches: [
      {
        batchNumber: "GLU-101",
        expiryDate: "2025-12-31",
        quantity: 2,
      },
    ],
  },
  {
    itemName: "Syringe 5ml",
    quantity: 10,
    unitPrice: "15.00",
    subTotal: "150.00",
    discount: {
      discountType: "FLAT",
      discountValue: "0.00",
    },
    lineItemTotalAmount: "150.00",
    tax: [
      { code: "SGST", percent: "12.00" },
      { code: "CGST", percent: "12.00" },
    ],
    hsn: "9018",
  },
  {
    itemName: "Insulin Injection",
    quantity: 1,
    unitPrice: "850.00",
    subTotal: "850.00",
    discount: {
      discountType: "MRP",
      discountValue: "85.00",
    },
    lineItemTotalAmount: "765.00",
    tax: [
      { code: "IGST", percent: "5.00" },
    ],
    hsn: "3004",
    batches: [
      {
        batchNumber: "INS-778",
        expiryDate: "2026-01-15",
        quantity: 1,
      },
    ],
  },
  {
  itemName: "Face Mask (Pack of 50)",
  quantity: 1,
  unitPrice: "300.00",
  subTotal: "300.00",
  discount: { discountType: "MRP", discountValue: "30.00" },
  lineItemTotalAmount: "270.00",
  tax: [
    { code: "SGST", percent: "6.00" },
    { code: "CGST", percent: "6.00" },
  ],
  hsn: "6307",
},
{
  itemName: "Thermometer Digital",
  quantity: 1,
  unitPrice: "250.00",
  subTotal: "250.00",
  discount: { discountType: "FLAT", discountValue: "25.00" },
  lineItemTotalAmount: "225.00",
  tax: [
    { code: "SGST", percent: "9.00" },
    { code: "CGST", percent: "9.00" },
  ],
  hsn: "9025",
},
{
  itemName: "Protein Powder 1kg",
  quantity: 1,
  unitPrice: "1500.00",
  subTotal: "1500.00",
  discount: { discountType: "MRP", discountValue: "150.00" },
  lineItemTotalAmount: "1350.00",
  tax: [
    { code: "IGST", percent: "18.00" },
  ],
  hsn: "2106",
},
{
  itemName: "Bandage Roll",
  quantity: 5,
  unitPrice: "40.00",
  subTotal: "200.00",
  discount: { discountType: "FLAT", discountValue: "0.00" },
  lineItemTotalAmount: "200.00",
  tax: [
    { code: "SGST", percent: "12.00" },
    { code: "CGST", percent: "12.00" },
  ],
  hsn: "3005",
}
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
  totalWriteOffAmount : "1000.00",
  totalAmountPaid : "10.00",
  creditsApplied : "10.00",
  totalInWords: "Nine Thousand Nine Hundred Seventy One Rupees and Forty Five Paise Only"
};


module.exports = { treatmentSheetData, invoiceData, prescriptionData };