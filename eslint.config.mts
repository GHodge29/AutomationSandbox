import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, prettier, playwright },
    extends: [
      "js/recommended",
      "plugin:playwright/recommended",
      "plugin:prettier/recommended",
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      "prettier/prettier": "error",
    },
  },
  tseslint.configs.recommended,
]);