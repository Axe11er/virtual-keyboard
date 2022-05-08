module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-use-before-define': [
      'off',
      { functions: false, classes: true, variables: true },
    ],
    'operator-linebreak': ['off'],
    'no-unused-expressions': ['off'],
  },
};
