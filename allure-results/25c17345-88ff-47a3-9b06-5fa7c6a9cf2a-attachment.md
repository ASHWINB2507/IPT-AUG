# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadanddownloadtask.spec.js >> download
- Location: tests\uploadanddownloadtask.spec.js:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - navigation [ref=e5]:
    - link [ref=e7] [cursor=pointer]:
      - /url: https://www.adobe.com/
      - img "Adobe, Inc." [ref=e8]
  - generic [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e13]:
          - img "Adobe, Inc." [ref=e14]
          - text: Adobe Acrobat Reader
        - generic [ref=e15]:
          - heading "The world’s most trusted free PDF viewer" [level=1] [ref=e17]
          - generic [ref=e19]:
            - text: Windows 10 - 11 • English • Version 26.001.21771
            - link "System requirements" [ref=e20] [cursor=pointer]:
              - /url: "#"
            - text: Download Acrobat Reader to work with PDFs in Acrobat on desktop and Google Chrome browser. By clicking the “Download Acrobat Reader” button, you acknowledge that you have read and accepted all of the
            - link:
              - /url: ""
            - link "Terms and Conditions." [ref=e21] [cursor=pointer]:
              - /url: "#"
          - button "Download Acrobat Reader" [active] [ref=e23] [cursor=pointer]
      - img "..." [ref=e25]
    - generic [ref=e26]:
      - paragraph [ref=e27]: Included with your download
      - group "Adobe Express Photos" [ref=e29]:
        - generic [ref=e32]:
          - checkbox [checked] [ref=e33]
          - generic [ref=e34]:
            - text: Install Adobe Express Photos
            - paragraph [ref=e35]:
              - generic [ref=e36]: The free Adobe app to view images, take screenshots, and easily make quick image edits.
            - link "Learn more" [ref=e37] [cursor=pointer]:
              - /url: "#"
      - group "Adobe Genuine" [ref=e39]:
        - generic [ref=e42]:
          - checkbox [checked] [ref=e43]
          - generic [ref=e44]:
            - text: Install Adobe Genuine Service (AGS)
            - paragraph [ref=e45]:
              - generic [ref=e46]: Periodically verify whether Adobe apps on this machine are genuine and notify me if they are not.
            - link "Learn more about AGS features and functionality" [ref=e48] [cursor=pointer]:
              - /url: https://helpx.adobe.com/en/genuine/adobe-genuine-service.html
      - button "Download Acrobat Reader" [ref=e50] [cursor=pointer]
      - link "More download options" [ref=e52] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e53]:
      - heading "More ways to work with documents and images, for free." [level=2] [ref=e55]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - img "..." [ref=e59]
          - heading "View, store, and share PDFs" [level=2] [ref=e60]
          - paragraph [ref=e61]: Get the best viewing experience for all types of PDF content. Store files online and share them with anyone.
        - generic [ref=e63]:
          - img "..." [ref=e64]
          - heading "Fill and sign" [level=2] [ref=e65]
          - paragraph [ref=e66]: Complete forms fast and add your signature or initials. Then share a link with others.
        - generic [ref=e68]:
          - img "..." [ref=e69]
          - heading "Work from anywhere" [level=2] [ref=e70]
          - paragraph [ref=e71]: Access your files from any device with the free Acrobat Reader app and through the Acrobat Reader Chrome extension
        - generic [ref=e73]:
          - img "..." [ref=e74]
          - heading "View and edit images" [level=2] [ref=e75]
          - paragraph [ref=e76]: Use Adobe Express Photos to take screenshots and share with others. View and edit images faster with easy-to-use AI tools.
      - button "Download Acrobat Reader" [ref=e78] [cursor=pointer]
    - generic [ref=e80]:
      - heading "Give your business the power of PDF productivity" [level=2] [ref=e81]
      - paragraph [ref=e82]: Let all your employees view, sign, comment on, and share PDFs for free.Acrobat Reader is available for distribution beyond single-user installation and can be quickly deployed in your organization with a volume license.
      - generic [ref=e83]:
        - button "Learn more" [ref=e84] [cursor=pointer]
        - button "Apply for a license" [ref=e85] [cursor=pointer]
  - contentinfo [ref=e86]:
    - generic [ref=e89]:
      - img "Adobe Acrobat Reader" [ref=e90]
      - generic [ref=e91] [cursor=pointer]: Change Region
    - generic [ref=e93]:
      - generic [ref=e94]: Copyright © 2026 Adobe.All rights reserved.
      - text: /
      - link "Acrobat online" [ref=e96] [cursor=pointer]:
        - /url: https://acrobat.adobe.com/?x_api_client_id=rdc_footer
      - text: /
      - link "Privacy" [ref=e97] [cursor=pointer]:
        - /url: "#"
      - text: /
      - link "Terms of use" [ref=e98] [cursor=pointer]:
        - /url: //www.adobe.com/legal/terms.html
      - text: /
      - link "Cookie preferences" [ref=e99] [cursor=pointer]:
        - /url: "#"
      - text: /
      - link "Do not sell or share my personal information" [ref=e101] [cursor=pointer]:
        - /url: https://www.adobe.com/go/ca-rights
      - text: /
      - link "Ad Choices" [ref=e102] [cursor=pointer]:
        - /url: https://www.adobe.com/privacy/opt-out.html#interest-based-ads
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  |     // test ('upload', async({page}) =>{
  3  |     //     await page.goto('https://www.file.io/');
  4  |     //     // await page.locator('.css-zpjtsm e12cce780').click();
  5  |     //     // await page.waitForTimeout(4000);
  6  |     //     await page.setInputFiles('#select-files-input',['F:/Playwright/screenshot/amazon_page.png','F:/Playwright/screenshot/demoqalocatortask_page.png']);
  7  |     //     await page.waitForTimeout(4000);
  8  |     //     // await page.setInputFiles('id="select-files-input"',[])
  9  |     // })
  10 | 
  11 | 
  12 | 
  13 | test('download', async ({ page }) => {
  14 | 
  15 |   await page.goto('https://get.adobe.com/reader/');
  16 | 
  17 |   const [download] = await Promise.all([
> 18 |     page.waitForEvent('download'),
     |          ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  19 | 
  20 |     // IMPORTANT: click action (no await here)
  21 |     page.locator("//button[text()='Download Acrobat Reader']").first().click()
  22 |   ]);
  23 |   await page.waitForTimeout(40000);
  24 | 
  25 |   console.log('Downloaded file:', await download.suggestedFilename());
  26 | 
  27 |   await download.saveAs(`./Download/${await download.suggestedFilename()}`);
  28 | });
```