import { expect, Page, test } from '@playwright/test';

export default class LogInAssertions {
  constructor(private page: Page) {}

  /**
   * Try to log in with invalid credentials and check for error message
   */
  public async loginWithInvalidData() {
      await test.step('Attempting to log in with invalid credentials', async () => {
          // Fill invalid email and password
          await this.page.locator('[data-placeholder="Enter email"]').fill('invalidemail');
          await this.page.getByRole('textbox', { name: 'Enter password' }).click();
          await this.page.getByText('Personal account Welcome').click();
          await expect(this.page.getByText(/Please enter correct email/i)).toBeVisible();
          await expect(this.page.getByText(/Please fill in this field to continue/i)).toBeVisible();
      });
  }
}
