const { pathsToModuleNameMapper } = require("ts-jest/utils");

const tsConfig = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: `${__dirname}/`
  })
};
