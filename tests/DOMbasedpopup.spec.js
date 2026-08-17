import { test } from "@playwright/test";

test('DOM_Based_Popup', async ({ page }) => {
    await page.goto('https://www.makemytrip.com/');

    try {
        await page.waitForSelector('[class="commonModal__close"]', { timeout: 6000 });
        await page.getByRole('button').click();
    }
    catch {
        console.log('popup not appeared');
    }

    // try{
    //     await page.waitForSelector('[class="font14 fullWidth"]');
    //     await page.locator('[class="font14 fullWidth"]').fill('9876542302');
    // }
    // catch{
    //
    // }
});