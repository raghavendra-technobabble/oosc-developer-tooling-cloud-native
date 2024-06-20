module.exports = {
  files: ['**/*.js'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      require: 'readonly',
      process: 'readonly',
      __dirname: 'readonly',
      module: 'readonly',
      console: 'readonly',
      Buffer: 'readonly',
      setImmediate: 'readonly',
      clearImmediate: 'readonly',
      setInterval: 'readonly',
      clearInterval: 'readonly',
      setTimeout: 'readonly',
      clearTimeout: 'readonly',
      // Add any other globals that your project might need
    },
  },
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'no-console': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
