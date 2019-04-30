const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const { override, removeModuleScopePlugin } = require("customize-cra");

const libraryDir = path.resolve(__dirname, "../../libraries");
const libraryCommonDir = path.join(libraryDir, "common/src");
const libraryReactComponentsDir = path.join(libraryDir, "react-components/src");

const addWebpackRule = rule => config => {
  config.module.rules.push(rule);
  return config;
};

const addWebpackResolvePlugin = plugin => config => {
  config.resolve.plugins.push(plugin);
  return config;
};

module.exports = override(
  // Copy directly from https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js#L352
  addWebpackRule({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: [libraryCommonDir, libraryReactComponentsDir],
    loader: require.resolve("babel-loader"),
    options: {
      customize: require.resolve("babel-preset-react-app/webpack-overrides"),
      babelrc: false,
      configFile: false,
      presets: [require.resolve("babel-preset-react-app")],
      cacheDirectory: true
    }
  }),
  addWebpackResolvePlugin(new TsconfigPathsPlugin()),
  removeModuleScopePlugin()
);
