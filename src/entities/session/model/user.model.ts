export interface User {
    id: number;
    username: string;
    email: string;
    avatar: string;
    fullName: string;
    mobileNumber: string;
    age: number;
    profileComplete: boolean;
}

export interface AuthResponse {
    user: User;
    token: string;
}