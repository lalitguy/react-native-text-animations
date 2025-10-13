module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        allowNamespaces: true,
        isTSX: true,
        allExtensions: true,
      },
    ],
    '@react-native/babel-preset',
  ],
  plugins: [
    '@babel/plugin-syntax-typescript',
    '@babel/plugin-syntax-dynamic-import',
    'react-native-worklets/plugin',
  ],
};
