import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
      extends: ["next/core-web-vitals", "next/typescript"],
      rules: {
        // "@typescript-eslint/no-unused-vars": 'warn'
        // '@next/next/no-img-element': 'off',
        // '@next/next/no-sync-scripts': 'off'
      }
    }),
];

export default eslintConfig;
