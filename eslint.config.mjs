import js from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: true,
        require: true,
        process: true
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
      "react-native": reactNativePlugin,
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          endOfLine: "auto"
        }
      ],
      "react/react-in-jsx-scope": "off",
      "react-native/no-inline-styles": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    ignores: ["node_modules", "build", "dist", ".expo", "*.config.js"]
  }
];
