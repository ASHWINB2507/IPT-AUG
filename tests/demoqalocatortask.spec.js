import {test} from "@playwright/test";

test ('Demoqatask',async({page})=>{
    await page.goto("https://demoqa.com/text-box")
    let url = await page.url
    let title = await page.title
    console.log(url);
    console.log(title);
    await page.locator('#userName').fill('Ashwin. B');
    await page.locator('#userEmail').fill('ashwin123@gmail.com');
    await page.locator('#currentAddress').fill('1/5-68B,Neelambur, Cbe - 641062.');
    await page.locator('#permanentAddress').fill('1/5-68B,Neelambur, Cbe - 641062.');
    await page.screenshot({path:'./screenshot/demoqalocatortask_page.png'});
    await page.locator('#submit').click();
})
