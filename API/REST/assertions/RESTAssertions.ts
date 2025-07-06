import { expect } from '@playwright/test';

export default class UserAssertions {
    public static validateUser(user: any, expectedUserId?: number): void {
        expect(user, 'User object should be defined').toBeDefined();
        expect(user, 'User object should not be null').not.toBeNull();
        expect(typeof user, 'User should be an object').toBe('object');

        expect(user, 'User should have username field').toHaveProperty('username');
        expect(user, 'User should have age field').toHaveProperty('age');
        expect(user, 'User should have user_id field').toHaveProperty('user_id');

        expect(typeof user.username, 'Username should be a string').toBe('string');
        expect(typeof user.age, 'Age should be a number').toBe('number');
        expect(typeof user.user_id, 'User ID should be a number').toBe('number');

        expect(user.username.length, 'Username should not be empty').toBeGreaterThan(0);
        expect(user.age, 'Age should be at least 1').toBeGreaterThanOrEqual(1);
        expect(user.age, 'Age should be at most 100').toBeLessThanOrEqual(100);
        expect(user.user_id, 'User ID should be positive').toBeGreaterThan(0);

        if (expectedUserId !== undefined) {
            expect(user.user_id, `User ID should match requested ID ${expectedUserId}`).toBe(expectedUserId);
        }

        console.log(`✓ User validated: ${user.username} (age: ${user.age}, id: ${user.user_id})`);
    }

    public static validateCreateUserRequest(userData: any): void {
        // Validate object existence
        expect(userData, 'User data should be defined').toBeDefined();
        expect(userData, 'User data should not be null').not.toBeNull();
        expect(typeof userData, 'User data should be an object').toBe('object');
        
        // Validate required fields presence
        expect(userData, 'User data should have username field').toHaveProperty('username');
        expect(userData, 'User data should have age field').toHaveProperty('age');
        expect(userData, 'User data should have user_type field').toHaveProperty('user_type');
        
        // Validate field types
        expect(typeof userData.username, 'Username should be a string').toBe('string');
        expect(typeof userData.age, 'Age should be a number').toBe('number');
        expect(typeof userData.user_type, 'User type should be a boolean').toBe('boolean');
        
        // Validate field values
        expect(userData.username.length, 'Username should not be empty').toBeGreaterThan(0);
        expect(userData.age, 'Age should be at least 1').toBeGreaterThanOrEqual(1);
        expect(userData.age, 'Age should be at most 100').toBeLessThanOrEqual(100);
        expect(Number.isInteger(userData.age), 'Age should be an integer').toBe(true);
        
        console.log(`✓ Create user request validated: ${userData.username} (age: ${userData.age}, type: ${userData.user_type})`);
    }
    
    public static validateCreateUserResponse(response: any, expectedUsername: string): void {
        // Validate object existence
        expect(response, 'Response object should be defined').toBeDefined();
        expect(response, 'Response object should not be null').not.toBeNull();
        expect(typeof response, 'Response should be an object').toBe('object');
        
        // Validate required fields presence
        expect(response, 'Response should have user_id field').toHaveProperty('user_id');
        expect(response, 'Response should have username field').toHaveProperty('username');
        
        // Validate field types
        expect(typeof response.user_id, 'User ID should be a number').toBe('number');
        expect(typeof response.username, 'Username should be a string').toBe('string');
        
        // Validate field values
        expect(response.user_id, 'User ID should be positive').toBeGreaterThan(0);
        expect(response.username.length, 'Username should not be empty').toBeGreaterThan(0);
        expect(response.username, `Username should match expected ${expectedUsername}`).toBe(expectedUsername);
        
        console.log(`✓ Create user response validated: ${response.username} (id: ${response.user_id})`);
    }
}
