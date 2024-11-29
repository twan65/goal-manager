// src/mocks/types.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface Goal {
  id: number;
  title: string;
  deadline: string;
  description: string;
  completed: boolean;
  tags: string[];
}

export interface CreateGoalRequest {
  title: string;
  deadline: string;
  description: string;
  tags: string[];
}