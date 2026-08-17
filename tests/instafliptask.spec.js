import {test} from '@playwright/test';

test('Instagaram', async({page}) =>{
    await page.goto('https://www.instagram.com/');
    let url = await page.url();
    let title = await page.title();
    console.log(url);
    console.log(title);
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(40000)
    await page.goBack();
    await page.waitForTimeout(40000)
    await page.reload();
    await page.waitForTimeout(40000)
    await page.goForward();
    await page.waitForTimeout(40000)
})