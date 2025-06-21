import { FlatCompat } from '@eslint/eslintrc'
 
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})
 
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      "@next/next/no-img-element": ['error'],
      "prefer-template": ["error"],
      // semi: ['error', 'always'],
      // quotes: ["error", "single"],
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "eol-last": ["error", "unix"],
    }
  }),
]
 
export default eslintConfig

