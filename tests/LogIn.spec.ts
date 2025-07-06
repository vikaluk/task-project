import { test } from '@fixtures/LogInFixtures';

test('Login page shows error for invalid credentials', async ({ login, assertions }) => {
  await login.launchApplication();
  await login.openLogin();
  await assertions.loginWithInvalidData();
});