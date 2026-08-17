import {test} from '@playwright/test';
test ('nested_frame', async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    let frame2 =  page.frameLocator('#frm2');
    await frame2.locator('#firstName').fill("Ashwin");
    await frame2.locator('#lastName').fill("Balakrishnan");
    await frame2.locator('#malerb').check();
    await frame2.locator('#spanishchbx').check();
    await frame2.locator('#hindichbx').check();
    await frame2.locator('[placeholder="Enter Email"]').fill("ashwin123@gmail.com");


    let frame3 = page.frameLocator('#frm3');
    let frame3_2 = frame3.frameLocator('#frm2');
    await frame3_2.locator('#firstName').fill("Ashwin");
    await frame3_2.locator('#lastName').fill("Bkrish");
    await frame3_2.locator('#malerb').check();
    await frame3_2.locator('#englishchbx').check();
    await frame3_2.locator('#latinchbx').check();
    await frame3_2.locator('#email').fill("ashwin321@gmail.com");
    await frame3_2.locator('#password').fill("Ashwin@1234");
    
});

// import { test } from '@playwright/test';

// test('nested_frame', async ({ page }) => {
//     await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

//     const frame2 = page.frameLocator('#frm2');

//     await frame2.locator('#firstName').fill("Ashwin");
//     await frame2.locator('#lastName').fill("Balakrishnan");
//     await frame2.locator('#malerb').check();
//     await frame2.locator('#spanishchbx').check();
//     await frame2.locator('[placeholder="Enter Email"]').fill("ashwin123@gmail.com");

//     await page.waitForTimeout(4000);
// });