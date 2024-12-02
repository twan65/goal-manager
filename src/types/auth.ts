export type User = {
    id: number;
    email: string;
    name: string;
   }
   
   export interface LoginRequest {
    email: string;
    password: string;
   }
   
   export interface LoginResponse {
    token: string;
    user: User;
   }
   
   export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
   }