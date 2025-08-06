import { expect, type Locator, type Page } from '@playwright/test';

export class homepagePage {
  readonly page: Page;
  readonly hammerFilterCheckbox: Locator;
  readonly productCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hammerFilterCheckbox = page.getByRole('checkbox', { name: /Hammer/i });
    this.productCard = page.locator('[class="card"]');
  }


}