import { test } from '@fixtures/OpenAccountFixtures';

test('Open account UI elements are visible', async ({ account, assertions }) => {
  await account.launchApplication();
  await account.openAccount();
  await assertions.verifySignUpUIElements();
});
