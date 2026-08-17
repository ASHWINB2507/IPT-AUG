import{test, chromium} from '@playwright/test';
test('Dropdown',async({page})=>{

    // let browser = await chromium.launch();
    // let context = await browser.newcontext();
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    // let url = await page.url();
    // let title = await page.url();
    await page.locator('//select[@class="form-select block w-full mt-1"]').nth(0).selectOption('Option 2')
    await page.waitForTimeout(4000)

    await page.getByRole('button',{name:'Multi-Select'}).click();
    // await page.locator('//select[@class="form-multiselect block w-full mt-1"]').selectOption(['Option 1', 'Option 3', 'Option 5']);
    await page.selectOption('//select[@class="form-multiselect block w-full mt-1"]',[{index:0},{index:2},{index:4}]);
    await page.waitForTimeout(5000);
})