// import {test,chromium} from '@playwright/test';
// test('LauchBrowser'), async()=>{
//     const browser = await chromium.lauch();
//     const context1 = await browser.newcontext({
//         recordvideo:{dir:'./video'}
//     });
//     const page1 = await context1.newpage();
//     const page1.goto('https://www.amazon.in/');
//     await page1.waitforTimeout(4000)
// }

import { test, chromium } from '@playwright/test';

test('LaunchBrowser', async () => {
    const browser = await chromium.launch();
    const context1 = await browser.newContext({
        recordVideo: { dir: './video' }
    });
    const page1 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');
    await page1.waitForTimeout(4000);

    // await context1.close();
    // await browser.close();

    const context2 = await browser.newContext();
});
 