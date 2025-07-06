import { test as base } from '@playwright/test';
import UserSteps from '@apisteps/UserSteps';
import RESTAssertions from '@restassertions/RESTAssertions';

type ApiFixtures = {
  userSteps: UserSteps;
  restAssertions: typeof RESTAssertions; // Use class type, not instance
};

export const test = base.extend<ApiFixtures>({
  userSteps: async ({ request }, use) => {
    const steps = new UserSteps(request);
    await use(steps);
  },

  restAssertions: async ({}, use) => {
    await use(RESTAssertions); // Pass the class itself
  },
});

export { expect } from '@playwright/test';
