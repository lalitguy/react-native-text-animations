const fs = require('fs');
const path = require('path');
const escape = require('escape-string-regexp');
const { getDefaultConfig } = require('@expo/metro-config');
const { withMetroConfig } = require('react-native-monorepo-config');

// Root paths
const exampleRoot = __dirname;

const libRoot = path.resolve(exampleRoot, '..'); // library root

// Read library package.json
const libPkg = JSON.parse(
  fs.readFileSync(path.join(libRoot, 'package.json'), 'utf8')
);

// Ensure peer dependencies are resolved from example
const modules = [
  'react',
  'react-native',
  'react-native-reanimated',
  '@babel/runtime',
  'metro-runtime',
  ...Object.keys({
    ...libPkg.dependencies,
    ...libPkg.peerDependencies,
  }),
].filter(Boolean);

// Base Expo Metro config
const baseConfig = getDefaultConfig(exampleRoot);

// Wrap it with monorepo helper
const config = withMetroConfig(baseConfig, {
  root: libRoot,
  dirname: __dirname,
});

const blockList = [
  new RegExp(`^${escape(path.join(libRoot, 'node_modules'))}\\/.*$`),
];
console.log(blockList);

const extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(exampleRoot, 'node_modules', name);
  return acc;
}, {});

console.log(extraNodeModules);
// Merge library-style fixes
config.watchFolders = [...(config.watchFolders || []), libRoot];

config.resolver = {
  ...config.resolver,
  blockList: [
    new RegExp(`^${escape(path.join(libRoot, 'node_modules'))}\\/.*$`),
  ],
  extraNodeModules: modules.reduce((acc, name) => {
    acc[name] = path.join(exampleRoot, 'node_modules', name);
    return acc;
  }, {}),
  unstable_enablePackageExports: false,
};

module.exports = config;
