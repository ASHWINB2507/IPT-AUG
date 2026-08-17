# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employeedeseialization.spec.js >> Deserialization
- Location: tests\employeedeseialization.spec.js:4:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: "api_testing"
Received array: ["manual", "automation", "mobile", "api"]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import fs from 'fs';
  3  | 
  4  | test('Deserialization', async () => {
  5  | 
  6  |     const jsonData = fs.readFileSync('employee.json', 'utf-8');
  7  | 
  8  |     const employee = JSON.parse(jsonData);
  9  | 
  10 |     console.log("Second Mobile Number:", employee.contact.mobile2);
  11 | 
> 12 |     expect(employee.skills).toContain('api_testing');
     |                             ^ Error: expect(received).toContain(expected) // indexOf
  13 | 
  14 | });
```