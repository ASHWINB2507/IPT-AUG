import { test, expect } from '@playwright/test';
import fs from 'fs';
 
test('Deserialization', async () => {
 
    // Read and deserialize JSON
    const jsonData = fs.readFileSync('employee.json', 'utf-8');
    const employee = JSON.parse(jsonData);
 
    // Task A: Print second mobile number
    console.log("Second Mobile Number:", employee.contact.mobile2);
 
    // Task B: Verify employee has "api" skill (case-insensitive)
    const skills = employee.skills.map(s => s.toLowerCase());
    expect(skills).toContain('api');
 
});