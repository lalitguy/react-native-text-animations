const path = require('path');

const { getDefaultConfig } = require('@expo/metro-config');
const { withMetroConfig } = require('react-native-monorepo-config');
const { withNativeWind } = require('nativewind/metro');

const root = path.resolve(__dirname, '..');

const defaultConfig = getDefaultConfig(__dirname);

const config = withMetroConfig(defaultConfig, {
  root,
  dirname: __dirname,
  conditions: ['source'],
});

config.watchFolders = Array.from(
  new Set([...(defaultConfig.watchFolders || []), root])
);

config.resolver.unstable_enablePackageExports = true;

module.exports = withNativeWind(config, {
  input: './global.css',
});
