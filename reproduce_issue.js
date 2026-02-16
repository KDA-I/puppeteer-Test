const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Simple content
    await page.setContent('<h1>Body Content</h1>');
    
    // External image URL
    const imageUrl = "https://picsum.photos/id/237/200/200";
    
    // Header template with external image
    const headerTemplate = `
      <div style="font-size: 10px; width: 100%; height: 100px; border: 1px solid red; display: flex; align-items: center; justify-content: center;">
        <span style="margin-right: 10px;">Header Image:</span>
        <img src="${imageUrl}" alt="Header Image" style="width: 50px; height: 50px; display: block;" />
      </div>
    `;

    await page.pdf({
      path: 'test_output_external.pdf',
      format: 'A4',
      displayHeaderFooter: true,
      headerTemplate: headerTemplate,
      footerTemplate: '<div style="font-size: 10px; text-align: center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
      margin: { top: '150px', bottom: '50px' }
    });

    console.log('PDF with external image generated: test_output_external.pdf');

    await browser.close();
  } catch (err) {
    console.error('Error:', err);
  }
})();
