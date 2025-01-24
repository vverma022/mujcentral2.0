import tailwindcss from "eslint-plugin-tailwindcss";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("next/core-web-vitals", "prettier", "plugin:tailwindcss/recommended"),
    {
        plugins: {
            tailwindcss,
        },

        settings: {
            tailwindcss: {
                callees: ["cn"],
                config: "tailwind.config.ts",
            },

            next: {
                rootDir: true,
            },
        },

        rules: {
            "@next/next/no-html-link-for-pages": "off",
            "react/jsx-key": "off",
            "tailwindcss/no-custom-classname": "off",
            "tailwindcss/classnames-order": "error",
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],

        languageOptions: {
            parser: tsParser,
        },
    },
];