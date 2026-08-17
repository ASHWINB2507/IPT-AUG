const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.describe('Employee Deserialization', () => {

  let emp;

  test.beforeAll(() => {
    // Step 1: Read JSON file
    const rawData = fs.readFileSync('./employee.json', 'utf-8');

    // Step 2: Parse (Deserialize) JSON into JS object
    emp = JSON.parse(rawData);

    console.log('Employee Data:', emp);
  });

  // Task A: Get second mobile number
  test('Task A - Second Mobile Number', () => {
    const mobile2 = emp.contact.mobile2;
    console.log('Second Mobile:', mobile2);
    expect(mobile2).toBe('34343493479');
  });

  // // Task B: Verify "api" skill exists
  // test('Task B - Has API Skill', () => {
  //   const hasAPI = emp.skills.map(s => s.toLowerCase()).includes('api');
  //   console.log('Has API Skill:', hasAPI);
  //   expect(hasAPI).toBe(true);
  // });
  });