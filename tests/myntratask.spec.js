
import { test } from '@playwright/test';

test('Myntra Minimum Price', async ({ page }) => {
    let result = await MinPriceProduct(page,'https://www.myntra.com/boy-tshirts');

    async function MinPriceProduct(page, url) {
    await page.goto(url);

    let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not(@class)]').allTextContents();

    let amount = price.map(product => Number(product.match(/\d+/g)[0]));
    let min = Math.min(...amount);

    let minPriceTitle = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice" and contains(., "${min}")]or(contains(., "${min}") and not(@class))]/ancestor::li/descendant::h4[@class="product-product"]).allTextContents()`);

    return {
        minPrice: min,
        productTitle: minPriceTitle
    }
}
    console.log("Minimum Price:", result.minPrice);
    console.log("Product Title:", result.productTitle);
})