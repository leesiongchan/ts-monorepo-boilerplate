const baseJestConfig = require("../../jest.config.js");

module.exports = {
  ...baseJestConfig,
  setupFilesAfterEnv: ["<rootDir>/../../jest.react.setup.js"],
  testEnvironment: "jsdom"
};
