// src/mocks/handlers/auth.ts
import { http, HttpResponse } from 'msw'
import { LoginRequest, LoginResponse, User } from '../types';

export const authHandlers = [
  http.post<never, LoginRequest>('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json();
    
    if (email === 'test@gmail.com' && password === '1234') {
      const response: LoginResponse = {
        token: 'mock-jwt-token',
        user: {
          id: 1,
          email: 'test@example.com',
          name: '테스트 사용자'
        }
      }
      return HttpResponse.json(response)
    }
    
    return new HttpResponse(null, { 
      status: 401,
      statusText: 'Unauthorized'
    })
  }),

  // 사용자 정보 조회
  http.get('/api/auth/me', () => {
    const user: User = {
      id: 1,
      email: 'test@example.com',
      name: '테스트 사용자'
    }
    return HttpResponse.json(user)
  }),

  // 로그아웃
  http.post('/api/auth/logout', () => {
    return new HttpResponse(null, { status: 200 })
  })
]