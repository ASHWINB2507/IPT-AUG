import {test} from '@playwright/test';
test('Flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    let url = await page.url()
    let title = await page.title();
    console.log(title);
    console.log(url);
    await page.screenshot({path: './screenshot/Flipkart_page.png'})
    await page.goto ('https://www.facebook.com');
    await page.goBack();
    await page.goForward(); 
    await page.reload();
    await page.waitForTimeout(3000)
}) 