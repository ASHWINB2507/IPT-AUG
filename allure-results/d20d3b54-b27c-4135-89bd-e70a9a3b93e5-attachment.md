# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employee.spec.js >> Employee Deserialization >> Task B - Has API Skill
- Location: tests\employee.spec.js:26:3

# Error details

```
Error: ENOENT: no such file or directory, open 'F:\Playwright\employee.json'
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const fs = require('fs');
  3  |  
  4  | test.describe('Employee Deserialization', () => {
  5  |  
  6  |   let emp;
  7  |  
  8  |   test.beforeAll(() => {
  9  |     // Step 1: Read JSON file
> 10 |     const rawData = fs.readFileSync('./employee.json', 'utf-8');
     |                        ^ Error: ENOENT: no such file or directory, open 'F:\Playwright\employee.json'
  11 |  
  12 |     // Step 2: Parse (Deserialize) JSON into JS object
  13 |     emp = JSON.parse(rawData);
  14 |  
  15 |     console.log('Employee Data:', emp);
  16 |   });
  17 |  
  18 |   // Task A: Get second mobile number
  19 |   test('Task A - Second Mobile Number', () => {
  20 |     const mobile2 = emp.contact.mobile2;
  21 |     console.log('Second Mobile:', mobile2);
  22 |     expect(mobile2).toBe('34343493479');
  23 |   });
  24 |  
  25 |   // Task B: Verify "api" skill exists
  26 |   test('Task B - Has API Skill', () => {
  27 |     const hasAPI = emp.skills.map(s => s.toLowerCase()).includes('api');
  28 |     console.log('Has API Skill:', hasAPI);
  29 |     expect(hasAPI).toBe(true);
  30 |   });
  31 |  
  32 | });
```