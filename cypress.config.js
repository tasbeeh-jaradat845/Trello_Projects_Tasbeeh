const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 0, // Disable retries when running tests in the terminal
      openMode: 0, // Disable retries when running tests in Cypress GUI
    },    
    screenshotsFolder: "R_0_Screenshots",
    baseUrl:"https://trello.com/",
    specPattern:"**/*.{feature,cy.js}",
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber());
    },
  },
});
