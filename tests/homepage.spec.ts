import { test, expect } from '@playwright/test';

test('homepage toont Squerist titel en heading', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Squerist/i);
  await expect(page.getByRole('heading', { name: /Squerist/i }).first()).toBeVisible();
});
