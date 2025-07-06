import { Page, test, expect } from '@playwright/test';

export default class OpenAccountSteps {
    constructor(private page: Page) {}

    /**
     * Launch the Application
     */
    public async launchApplication() {
        await test.step('Launching the application', async () => {
            await this.page.goto('https://paydo.com/');
        });
    }

    /**
     * Click the "Open account" button and wait for navigation
     */
    public async openAccount() {
        await test.step('Opening a new account', async () => {
            const openAccountButton = this.page.getByRole('link', { name: 'Open account' }).nth(2);
            // await openAccountButton.waitFor({ state: 'visible' });
            await openAccountButton.click();
            // Wait for the URL to contain the expected path, ignoring query params
            await this.page.waitForURL(/https:\/\/account\.paydo\.com\/en\/auth\/personal\/sign-up.*/);
        });
    }
}
