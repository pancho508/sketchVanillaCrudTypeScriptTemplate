// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    rules: {
      // add or override rules
      '@typescript-eslint/no-explicit-any': 'warn',
    }
  };
  