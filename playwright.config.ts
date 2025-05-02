import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e', // where your E2E specs live
  timeout: 30_000, // max time per test
  retries: process.env.CI ? 2 : 0,
  reporter: 'html', // generates an HTML report
  use: {
    baseURL: 'http://localhost:5173', // so you can use page.goto('/')
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  ],
});
