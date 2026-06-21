import { test, expect } from '@playwright/test';

test('abrir página exemplo', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);
});