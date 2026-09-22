import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('salman khan');
  await page.getByRole('button', { name: 'Google Search' }).click();
  
});