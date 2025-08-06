import { test, expect } from '@playwright/test';
import { loginPage } from '../selectors/loginPage';
import { faker } from '@faker-js/faker';

test.describe('Login tests', () => {

  let login: loginPage;

  const validEmail = 'admin@practicesoftwaretesting.com';
  const password = faker.animal.bear();
  const invalidEmail = faker.animal.bear();

  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to Home page', async () => {
      login = new loginPage(page);
      await login.gotoWebsite();
    });
  });

  test('Valid login', async ({ page }) => {

    login = new loginPage(page);
    
    await test.step('Navigate to the login screen', async () => {
      await expect(login.signInButton).toBeVisible();
      await login.signInButton.click();
    });
    await test.step('Populate email address', async () => {
      await expect(login.emailInput).toBeVisible();
      await login.emailInput.fill(validEmail);
    });
      await test.step('Populate password', async () => {
      await expect(login.passwordInput).toBeVisible();
      await login.passwordInput.fill('welcome01');  
    });
    await test.step('Click Login Button', async () => {
      await expect(login.loginSubmitButton).toBeEnabled();
      await login.loginSubmitButton.click();
    });
    await test.step('Verify login has worked', async () => {
      await expect(login.profileNavMenu).toBeVisible();
      await expect(login.profileNavMenu).toContainText('John Doe');
    });
  });

   test('Invalid password', async ({ page }) => {
    await test.step('Navigate to the login screen', async () => {
      await expect(login.signInButton).toBeVisible();
      await login.signInButton.click();
    });
    await test.step('Populate email address', async () => {
      await expect(login.emailInput).toBeVisible();
      await login.emailInput.fill(validEmail);
    });
    await test.step('Populate password', async () => {
      await expect(login.passwordInput).toBeVisible();
      await login.passwordInput.fill(password);  
    });
    await test.step('Click Login Button', async () => {
      await expect(login.loginSubmitButton).toBeEnabled();
      await login.loginSubmitButton.click();
    });
    await test.step('Verify login has failed', async () => {
      await expect(login.invalidLoginError).toBeVisible();
      await expect(login.invalidLoginError).toContainText('Invalid email or password');
    });
  });
test('Invalid email', async ({ page }) => {
    await test.step('Navigate to the login screen', async () => {
      await expect(login.signInButton).toBeVisible();
      await login.signInButton.click();
    });
    await test.step('Populate email address', async () => {
      await expect(login.emailInput).toBeVisible();
      await login.emailInput.fill(invalidEmail);
    });
      await test.step('Populate password', async () => {
      await expect(login.passwordInput).toBeVisible();
      await login.passwordInput.fill('welcome01');  
    });
    await test.step('Click Login Button', async () => {
      await expect(login.loginSubmitButton).toBeEnabled();
      await login.loginSubmitButton.click();
    });
    await test.step('Verify login has failed', async () => {
      await expect(login.invalidEmailError).toBeVisible();
      await expect(login.invalidEmailError).toContainText('Email format is invalid');
    });
  });
});
