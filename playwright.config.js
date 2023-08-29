const {devices} = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: 'src/E2E/__tests__',
  workers: 1,
  reporter: 'html',
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        // Test against Chrome Beta channel.
        // channel: 'chrome-beta',
      },
    },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: {width: 1200, height: 750},
    //   },
    // },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     browserName: 'firefox',
    //     viewport: {width: 800, height: 600},
    //   },
    // },
  ],
};

module.exports = config;
