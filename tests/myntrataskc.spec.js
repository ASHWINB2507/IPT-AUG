//Product price for :
import { test } from "@playwright/test";

test("Product Prices", async ({ page }) => {
    await page.goto("https://www.myntra.com/boy-tshirts");

    let product_price = await page.locator("//div[@class='product-price']").allTextContents();
    
    let productPrices = product_price.map(price => price.toString().trim());
    
    console.log(productPrices);
});
