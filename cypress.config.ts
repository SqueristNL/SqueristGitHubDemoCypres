import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.squerist.nl',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: false,
  },
  video: false,
  screenshotOnRunFailure: true,
});
