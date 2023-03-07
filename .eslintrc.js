module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    parser: "babel-eslint",
  },
  parser: "vue-eslint-parser",
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
