const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/no-extraneous-dependencies": "off", // Отключает ошибку vue-router
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        vue: "always"
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".vue"]
      },
    }
  }
};
