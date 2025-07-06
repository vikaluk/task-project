import { test as base } from '@playwright/test';
import LogInSteps from '@steps/LogInSteps';
import LogInAssertions from '@assertions/LogInAssertions';

// Extend the base test with custom fixtures
type LoginFixtures = {
  login: LogInSteps;
  assertions: LogInAssertions;
};

export const test = base.extend<LoginFixtures>({
  login: async ({ page }, use) => {
    const login = new LogInSteps(page);
    await use(login);
  },

  assertions: async ({ page }, use) => {
    const assertions = new LogInAssertions(page);
    await use(assertions);
  },
});

export { expect } from '@playwright/test';
