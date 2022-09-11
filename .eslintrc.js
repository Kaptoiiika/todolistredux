module.exports = {
  ignorePatterns: [".eslintrc.js"],
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      {
        tsx: "never",
        ts: "never",
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
  },
  overrides: [],
};
