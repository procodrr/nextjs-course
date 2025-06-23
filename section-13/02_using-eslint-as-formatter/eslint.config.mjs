import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      // semi: ['error'],
      // quotes: ['error', 'single'],
      // indent: ['error', 2],
      // "linebreak-style": ["error", "unix"],
      // 'comma-dangle': ['error', 'never']
    }
  })
];

export default eslintConfig;
