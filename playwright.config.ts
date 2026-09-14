import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'https://www.squerist.nl',
    trace: 'on-first-retry',
  },
});
