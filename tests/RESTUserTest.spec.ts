// tests/user-api.spec.ts
import { test, expect } from '@fixtures/APIFixtures';
import { ValidUserData } from '@RESTData/UserData';

test('GET /users returns a list of users with expected fields', async ({ userSteps, restAssertions }) => {
  const user = await userSteps.getUserById(12);
  restAssertions.validateUser(user, 12);
});

test('POST /user creates a user and returns expected fields', async ({ userSteps, restAssertions }) => {
  const createdUser = await userSteps.createUser(ValidUserData);
  restAssertions.validateCreateUserResponse(createdUser, ValidUserData.username);
});
