import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    eslintConfigPrettier,

    {
        files: ["**/*.ts"],

        languageOptions: {
            globals: globals.node,
            parserOptions: {
                project: "./tsconfig.json"
            }
        },

        rules: {
            "no-console": "off",

            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],

            "@typescript-eslint/no-explicit-any": "warn",

            "@typescript-eslint/consistent-type-imports": "error"
        }
    }
];