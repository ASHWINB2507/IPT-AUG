import {test, expect} from '@playwright/test';

test('assertions', asunc({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await expect(page.locator()
})