'use strict';

module.exports = {
  root: true,
  extends: [
    'eslint-config-digitalbazaar'
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script'
  },
  ignorePatterns: ['node_modules', 'reports'],
  rules: {
    strict: ['error', 'global']
  }
};
