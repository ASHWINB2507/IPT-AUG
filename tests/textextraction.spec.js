import { test, expect } from '@playwright/test';

test('Web Table Operations', async ({ page }) => {
  // 1. Open Web Tables Page
  await page.goto('https://demoqa.com/webtables');

  // =====================================
  // 2. ADD NEW RECORD
  // =====================================
  await page.locator('#addNewRecordButton').click();

  const modal = page.locator('.modal-content');
  await expect(modal).toBeVisible();

  await modal.locator('#firstName').fill('Ashwin');
  await modal.locator('#lastName').fill('B');
  await modal.locator('#userEmail').fill('ashwin@gmail.com');
  await modal.locator('#age').fill('26');
  await modal.locator('#salary').fill('23000');
  await modal.locator('#department').fill('SDET');

  await modal.locator('#submit').click();

  // Verify Ashwin record is present in the table
  const ashwinRow = page.locator('.rt-tr-group').filter({ hasText: 'Ashwin' });
  await expect(ashwinRow).toHaveCount(1);

  // =====================================
  // 3. EDIT EXISTING RECORD (VEGA)
  // =====================================
  const vegaRow = page.locator('.rt-tr-group').filter({ hasText: 'Vega' });
  await expect(vegaRow).toHaveCount(1);

  await vegaRow.locator('[title="Edit"]').click();

  const editModal = page.locator('.modal-content');
  await expect(editModal).toBeVisible();

  // Playwright's .fill() automatically clears existing text before typing
  await editModal.locator('#age').fill('45');
  await editModal.locator('#submit').click();

  // Verify updated age
  await expect(vegaRow).toContainText('45');

  // =====================================
  // 4. DELETE RECORD (CANTRELL)
  // =====================================
  const cantrellRow = page.locator('.rt-tr-group').filter({ hasText: 'Cantrell' });
  await expect(cantrellRow).toHaveCount(1);

  await cantrellRow.locator('[title="Delete"]').click();

  // Verify Cantrell row is removed
  await expect(cantrellRow).toHaveCount(0);

  // =====================================
  // 5. VERIFY NEWLY ADDED RECORD DATA
  // =====================================
  await expect(ashwinRow).toContainText('Ashwin');
  await expect(ashwinRow).toContainText('B');
  await expect(ashwinRow).toContainText('ashwin@gmail.com');
  await expect(ashwinRow).toContainText('26');
  await expect(ashwinRow).toContainText('23000');
  await expect(ashwinRow).toContainText('SDET');
});