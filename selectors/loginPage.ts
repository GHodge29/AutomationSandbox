import { expect, type Locator, type Page } from '@playwright/test';

export class loginPage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly profileNavMenu: Locator;
  readonly invalidLoginError: Locator;
  readonly invalidEmailError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('[data-test="nav-sign-in"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginSubmitButton = page.locator('[data-test="login-submit"]');
    this.profileNavMenu = page.locator('[data-test="nav-menu"]');
    this.invalidLoginError = page.locator('[data-test="login-error"]');
    this.invalidEmailError = page.locator('[data-test="email-error"]');
  }

  async gotoWebsite() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.page).toHaveTitle(/Practice Software Testing/);
  }

}