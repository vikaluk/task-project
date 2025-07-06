import { test as base } from '@playwright/test';
import OpenAccountSteps from '@steps/OpenAccountSteps';
import OpenAccountAssertions from '@assertions/OpenAccountAssertions';

type OpenAccountFixtures = {
  account: OpenAccountSteps;
  assertions: OpenAccountAssertions;
};

export const test = base.extend<OpenAccountFixtures>({
  account: async ({ page }, use) => {
    const steps = new OpenAccountSteps(page);
    await use(steps);
  },

  assertions: async ({ page }, use) => {
    const assertions = new OpenAccountAssertions(page);
    await use(assertions);
  },
});

export { expect } from '@playwright/test';
