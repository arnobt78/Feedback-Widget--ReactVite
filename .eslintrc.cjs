module.exports = {
  env: {
    browser: true,
    es2020: true,
    es2021: true,
    node: true, // Add this line
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: { version: "18.2" },
  },
  plugins: ["react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    // Your existing rules
  },
  globals: {
    __dirname: "readonly",
  },
};
