import {test} from '@playwright/test';

test ('Amazon',async({page})=>{
    await page.goto("https:/www.amazon.in")
    let url = await page.url();
    let title = await page.title();
    console.log(title);
    console.log(url);
    await page.screenshot({path:'./screenshot/Amazon_page.png'});
    await page.goto('https://www.instagram.com');
    await page.screenshot({path:'./C:/Users/DELL/Downloads/Instagram_page.png'});
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.waitForTimeout(3000);
})

test('Locator',async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('#twotabsearchtextbox').fill('iPhone17');
    await page.locator('#nav-search-submit-button').click();
    await page.screenshot({path:'./screenshot/amazon_page.png'});
    await page.waitForTimeout(3000);
})


