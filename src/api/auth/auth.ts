import { client } from "../client";

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export const auth = {
  login: (params: LoginParams) => 
    client.post<LoginResponse>('/auth/login', params),
  
  logout: () => 
    client.post('/auth/logout'),
  
  me: () => 
    client.get('/auth/me'),
};