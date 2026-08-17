// import {test} from "@playwright/test";

// test('Selfpractice',async({page})=>{
//     await page.goto("https://www.geeksforgeeks.org/");
//     let url = await page.url();
//     let title = await page.title();

//     console.log(page.url);
//     console.log(page.title);

//     await page.locator('.gsc-input input').fill("JavaScript");
//     await page.locator('.gs-search-button').click();

// });

// import { test } from '@playwright/test';

// test('Drag_and_Drop', async ({ page }) => {
//     await page.goto("https://jqueryui.com/droppable/");

//     const frame = page.frameLocator('.demo-frame');
//     await frame.locator('#draggable').dragTo(frame.locator('#droppable'));

//     await page.waitForTimeout(1000);
// });

