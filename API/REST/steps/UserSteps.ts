import { test, APIRequestContext, expect } from '@playwright/test';
import { UserResponse, CreateUserRequest, CreateUserResponse } from '@restConstants/RESTConstants';
import RESTAssertions from '@restassertions/RESTAssertions';

export default class UserSteps {
    constructor(private request: APIRequestContext) {}

    private BASE_URL = process.env.REST_API_BASE_URL || '';

    public async get(endPoint: string, operation: string) {
        let response;
        await test.step(`Making call to GET ${operation}`, async () => {
            response = await this.request.get(this.BASE_URL + endPoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            expect(response.ok()).toBeTruthy();
        });
        return response;
    }

    public async post(endPoint: string, operation: string, data: any) {
        let response;
        await test.step(`Making call to POST ${operation}`, async () => {
            response = await this.request.post(this.BASE_URL + endPoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data: JSON.stringify(data),
            });
            expect(response.ok()).toBeTruthy();
        });
        return response;
    }

    public async getUserById(userId: number): Promise<UserResponse> {
        const response = await this.get(`/user/${userId}`, `User by ID ${userId}`);
        const user = await response.json();
        
        return user;
    }

    public async createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
        RESTAssertions.validateCreateUserRequest(userData);

        const response = await this.request.post(`${this.BASE_URL}/users`, {
            data: userData
        });

        expect(response.ok(), 'Failed to create user').toBeTruthy();

        const createdUser = await response.json();

        RESTAssertions.validateCreateUserResponse(createdUser, userData.username);

        return createdUser;
    }
}
