/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,  // Corresponds to ES6
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    'no-unused-vars': 'warn',
    'no-console': 'off'
  }
};
