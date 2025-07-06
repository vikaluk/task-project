export interface UserPayload {
  username: string;
  age: number;
  user_type: boolean;
}

export const ValidUserData: UserPayload = {
  username: 'testuser',
  age: 25,
  user_type: true
};

export const AnotherUser: UserPayload = {
  username: 'anotheruser',
  age: 30,
  user_type: false
};