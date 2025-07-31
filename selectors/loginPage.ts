import { expect, type Locator, type Page } from '@playwright/test';

export class loginPage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly profileNavMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('[data-test="nav-sign-in"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginSubmitButton = page.locator('[data-test="login-submit"]');
    this.profileNavMenu = page.locator('[data-test="nav-menu"]');
  }

//   async goto() {
//     await this.page.goto('https://playwright.dev');
//   }

}