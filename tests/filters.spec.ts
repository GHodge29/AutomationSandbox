import { test, expect } from '@playwright/test';
import { loginPage } from '../selectors/loginPage';
import { homepagePage } from '../selectors/homepagePage';   


test.describe('filters tests', () => {

  let login: loginPage;
  let homepage: homepagePage;

  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to Home page', async () => {
      login = new loginPage(page);
      await login.gotoWebsite();
    });
  });

  test('hammer filter', async ({ page }) => {

    homepage = new homepagePage(page);
    
    await test.step('check hammer filter checkbox', async () => {
        await homepage.hammerFilterCheckbox.scrollIntoViewIfNeeded();
        await expect(homepage.hammerFilterCheckbox).toBeVisible();
        await homepage.hammerFilterCheckbox.check();
        await expect(homepage.hammerFilterCheckbox).toBeChecked();
    });
    await test.step('wait for product count to update', async () => {
        // Wait for the product count to change after filtering
        const initialCount = await homepage.productCard.count();
        await expect(async () => {
            const newCount = await homepage.productCard.count();
            expect(newCount).not.toBe(initialCount);
        }).toPass();
  });
    await test.step('varifying results match the filter', async () => {
        const productCards = homepage.productCard;
        const productTexts = await productCards.allTextContents();
        productTexts.forEach(text => {
            expect(text).toMatch(/hammer/i);
        });
    });
    await page.waitForTimeout(2000); // wait for the filter to apply
    // assert that hammer filter is applied
  });

});
