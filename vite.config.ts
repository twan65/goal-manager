// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api'로 시작하는 요청을 대상 서버로 프록시
      '/api': {
        target: 'http://localhost:8080', // 백엔드 서버 주소
        changeOrigin: true, // 호스트 헤더 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 제거
        secure: false, // https일 경우 SSL 인증 무시
      },
    },
  },
})