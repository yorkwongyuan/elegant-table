module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // 增加这里
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 增加这里
    'import/prefer-default-export': 0,
  },
};
