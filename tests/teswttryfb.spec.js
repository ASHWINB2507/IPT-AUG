import {test} from '@playwright/test';
test('Facebook',async({page}) => {
    await page.goto('https://www.facebook.com/');
})



