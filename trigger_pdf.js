const http = require('http');
const https = require('https');
const fs = require('fs');

const imageUrl = "https://ibb.co/yFn73W0M";

// 1. Check Image URL
console.log("Checking image URL...");
https.get(imageUrl, (res) => {
  console.log(`Image URL Status: ${res.statusCode}`);
  console.log(`Image Content-Type: ${res.headers['content-type']}`);
  res.resume(); // consume response to free memory
  
  // 2. Trigger PDF Generation
  console.log("\nTriggering PDF generation...");
  http.get('http://localhost:3000/generate-pdf/prescription', (res) => {
    console.log(`PDF Generation Status: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log("PDF generated successfully (download stream started).");
    } else {
        console.log("PDF generation failed.");
        res.pipe(process.stdout);
    }
  }).on('error', (e) => {
    console.error(`Error triggering PDF: ${e.message}`);
  });

}).on('error', (e) => {
  console.error(`Error checking image URL: ${e.message}`);
});
