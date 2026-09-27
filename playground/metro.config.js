// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");

const { getDefaultConfig } = require("expo/metro-config");
const { withMetroConfig } = require("react-native-monorepo-config");
const { withUniwindConfig } = require("uniwind/metro");

const root = path.resolve(__dirname, "..");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

const config = withMetroConfig(defaultConfig, {
  root,
  dirname: __dirname,
  conditions: ["source"],
});

config.watchFolders = Array.from(
  new Set([...(defaultConfig.watchFolders || []), root])
);

config.resolver.unstable_enablePackageExports = true;

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./global.css",
  dtsFile: "./src/uniwind-types.d.ts",
});
