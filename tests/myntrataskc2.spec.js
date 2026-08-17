//product name: 
import {test} from "@playwright/test";

test("Product Name", async({page}) =>{
    await page.goto("https://www.myntra.com/boy-tshirts");

    let product_name = await page.locator("//div[@class='product-productMetaInfo']").allTextContents();
    console.log(product_name);
    
});