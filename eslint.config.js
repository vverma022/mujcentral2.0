/** @type {import('eslint').Linter.FlatConfig} */
module.exports = [
  {
    // Base configuration for JavaScript and TypeScript files
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),  // Correct way to reference the parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      tailwindcss: require('eslint-plugin-tailwindcss'), // TailwindCSS plugin
      prettier: require('eslint-plugin-prettier'),       // Prettier plugin
      next: require('eslint-plugin-next'),               // Next.js plugin
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'error',
      'prettier/prettier': 'error', // Prettier formatting rule
    },
    settings: {
      tailwindcss: {
        callees: ['cn'],
        config: 'tailwind.config.ts',
      },
      next: {
        rootDir: true,
      },
    },
  },

  // TailwindCSS plugin configuration
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    plugins: {
      tailwindcss: require('eslint-plugin-tailwindcss'), // TailwindCSS plugin
    },
    rules: {
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'off',
    },
  },

  // Next.js core web vitals configuration
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    plugins: {
      next: require('eslint-plugin-next'),               // Next.js plugin
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',  // Next.js specific rule
    },
  },
];