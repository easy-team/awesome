'use strict';
module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    EASY_ENV_IS_DEV: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint/eslint-plugin"
  ],
  rules: {
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "react/no-danger": 0,
    "react/no-did-mount-set-state": 0,
    "max-len": ["error", { "code": 150 }],
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
}
