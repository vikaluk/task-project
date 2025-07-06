import { expect, Page, test } from '@playwright/test';

export default class OpenAccountAssertions {
  constructor(private page: Page) {}

  /**
   * Check all required UI elements on the sign-up page
   */
  public async verifySignUpUIElements() {
    await test.step('Checking all UI elements on the sign-up page', async () => {
      await expect(this.page.getByRole('link', { name: 'Paydo logo' })).toBeVisible();
      await expect(this.page.getByText('Personal account', { exact: true })).toBeVisible();
      await expect(this.page.getByRole('img', { name: 'Pay with PayDo checkout' })).toBeVisible();
      await expect(this.page.getByText('Pay with PayDo checkout')).toBeVisible();
      await expect(this.page.getByText('Pay with Apple Pay & Google')).toBeVisible();
      await expect(this.page.getByRole('link', { name: 'Back to Homepage' })).toBeVisible();
      await expect(this.page.getByRole('heading', { name: 'Create a personal account' })).toBeVisible();
      await expect(this.page.locator('mat-label').filter({ hasText: 'Email' })).toBeVisible();
      await expect(this.page.locator('.mat-form-field-flex').first()).toBeVisible();
      await expect(this.page.getByText('Password', { exact: true })).toBeVisible();
      await expect(this.page.locator('.mat-form-field-flex.ng-tns-c2794762957-3')).toBeVisible();
      await expect(this.page.locator('ngp-field-requirements-item').filter({ hasText: 'Min.8 characters' })).toBeVisible();
      await expect(this.page.locator('ngp-field-requirements-item').filter({ hasText: 'Lowercase letter' })).toBeVisible();
      await expect(this.page.locator('ngp-field-requirements-item').filter({ hasText: 'Uppercase letter' })).toBeVisible();
      await expect(this.page.locator('ngp-field-requirements-item').filter({ hasText: 'At least 1 number' })).toBeVisible();
      await expect(this.page.getByText('Confirm password')).toBeVisible();
      await expect(this.page.locator('.mat-form-field-flex.ng-tns-c2794762957-4')).toBeVisible();
      await expect(this.page.getByRole('button', { name: 'Create an account' })).toBeVisible();
      await expect(this.page.getByRole('link', { name: 'Switch to create Business' })).toBeVisible();
      await expect(this.page.getByText('By creating an account you')).toBeVisible();
    });
  }
}
