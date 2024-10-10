import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['dot'],
    ['json', {
      outputFile: 'jsonReports/jsonReport.json'
    }],
    ['html', {
      open: 'always'
    }]
  ],
  use: {
    headless: false,
    actionTimeout: 0,
    screenshot: 'on',
    video: 'on',
    launchOptions: {
      slowMo: 1000
    },
    baseURL: 'https://parabank.parasoft.com/parabank/',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  testMatch: ['tests/register.test.ts']
});
