export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  fullName: string | null;
  mobileNumber: string | null;
  age: number | null;
  profileComplete: boolean;
}
export interface MeResponse {
  data: User;
}
export interface AuthResponse {
  user: User;
  token: string;
}
