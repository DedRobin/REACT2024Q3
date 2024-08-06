const { JsxFlags } = require("typescript");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react-compiler", "prettier"],
  rules: {
    "no-inline-comments": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true, allowExportNames: ["metadata"] },
    ],
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
