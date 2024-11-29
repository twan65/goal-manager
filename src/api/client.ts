// src/api/client.ts
import axios, { AxiosInstance } from 'axios';

const createClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: '/api', // TODO: 環境変数にすること
    timeout: 6000, // TODO: タイムアウトの検討
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // リクエスト・インタセプター
  client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // レスポンス・インタセプター
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        // 認証エラー処理
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return client;
};

export const client = createClient();