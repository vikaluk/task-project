import { Page, test, expect } from '@playwright/test';

export default class LogInSteps {
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
     * Click the "Log in" button and wait for navigation to the login page
     */
    public async openLogin() {
        await test.step('Opening the login page', async () => {
            const loginButton = this.page.getByRole('link', { name: /log in/i });
            await loginButton.waitFor({ state: 'visible' });
            await loginButton.click();
            // Wait for the URL to contain the expected sign-in path, ignoring query params
            await this.page.waitForURL(/https:\/\/account\.paydo\.com\/en\/auth\/personal\/sign-in.*/);
        });
    }
}
