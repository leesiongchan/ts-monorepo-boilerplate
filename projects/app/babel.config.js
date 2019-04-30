const path = require("path");

const libraryDir = path.resolve(__dirname, "../../libraries");
const libraryCommonDir = path.join(libraryDir, "common/src");

module.exports = api => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          alias: {
            "@mono/common": libraryCommonDir
          }
        }
      ]
    ]
  };
};
