export default class RESTConstants {
    static readonly CONTENT_TYPE = 'Content-Type';
    static readonly ACCEPT = 'Accept';
    static readonly CONTENT_JSON = "application/json";
    static readonly STATUS_CODE = "Status Code";
}

export interface CreateUserRequest {
  username: string;
  age: number;
  user_type: boolean;
}

export interface CreateUserResponse {
  user_id: number;
  username: string;
}

export interface UserResponse {
    username: string;
    age: number;
    user_id: number;
}