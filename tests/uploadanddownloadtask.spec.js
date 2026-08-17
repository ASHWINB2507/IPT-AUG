import {test} from '@playwright/test';
    test ('upload', async({page}) =>{
        await page.goto('https://www.file.io/');
        // await page.locator('.css-zpjtsm e12cce780').click();
        // await page.waitForTimeout(4000);
        await page.setInputFiles('#select-files-input',['F:/Playwright/screenshot/amazon_page.png','F:/Playwright/screenshot/demoqalocatortask_page.png']);
        await page.waitForTimeout(4000);
        // await page.setInputFiles('id="select-files-input"',[])
    })



// test('download', async ({ page }) => {

//   await page.goto('https://get.adobe.com/reader/');

//   const [download] = await Promise.all([
//     page.waitForEvent('download'),

//     // IMPORTANT: click action (no await here)
//     page.locator("//button[text()='Download Acrobat Reader']").first().click()
//   ]);
//   await page.waitForTimeout(40000);

//   console.log('Downloaded file:', await download.suggestedFilename());

//   await download.saveAs(`./Download/${await download.suggestedFilename()}`);
// });