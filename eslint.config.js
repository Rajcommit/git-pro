// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,
];
