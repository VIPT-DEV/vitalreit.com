// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.cache/',
      '.tmp/',
      '.strapi/',
      'public/',
      'types/generated/',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended
);
