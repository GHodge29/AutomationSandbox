import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await test.step('Navigate to Home page', async () => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveTitle(/Practice Software Testing/);
  });
  await test.step('Navigate to the login screen', async () => {
    await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();
    await page.locator('[data-test="nav-sign-in"]').click();
  });
  await test.step('Populate email address', async () => {
    await expect(page.locator('[data-test="email"]')).toBeVisible();
    await page.locator('[data-test="email"]').fill('admin@practicesoftwaretesting.com');
  });
    await test.step('Populate password', async () => {
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await page.locator('[data-test="password"]').fill('welcome01');
  });
  await test.step('Click Login Button', async () => {
    await expect(page.locator('[data-test="login-submit"]')).toBeEnabled();
    await page.locator('[data-test="login-submit"]').click();
  });
  await page.waitForTimeout(1000);
});
