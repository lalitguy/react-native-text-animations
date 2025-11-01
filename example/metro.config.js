const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { withMetroConfig } = require('react-native-monorepo-config');
const { withNativeWind } = require('nativewind/metro');

const root = path.resolve(__dirname, '..'); // workspace root
const library = path.resolve(root, 'src'); // your library source (adjust if needed)

const config = withMetroConfig(getDefaultConfig(__dirname), {
  root,
  dirname: __dirname,
});

// Important: explicitly include the workspace root and the library
config.watchFolders = [root, library];

// Make sure Metro resolves modules from both example and workspace root
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(root, 'node_modules'),
];

// Prevent Metro from following weird symlink behavior
config.resolver.unstable_enableSymlinks = false;

// Recommended for modern packages using "exports"
config.resolver.unstable_enablePackageExports = true;

module.exports = withNativeWind(config, { input: './global.css' });
