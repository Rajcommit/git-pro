import { defineConfig } from "eslint";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    react: pluginReact,
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
    ...tseslint.configs.recommended[0].rules, // TS adds as array, so use [0]
  },
});
