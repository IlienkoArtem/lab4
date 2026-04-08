import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: '**/*.spec.js', // Playwright шукатиме лише файли .spec.js
  use: {
    baseURL: 'http://localhost:5173',
  },
});