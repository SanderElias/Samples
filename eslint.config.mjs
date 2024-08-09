import angular from '@angular-eslint/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslint from 'eslint';
import { type } from 'os';
import tsParser from '@typescript-eslint/parser';
import ngParser from '@angular-eslint/template-parser';
import { parse } from 'path';

export default [
  {
    files: ['src/**/*.ts'],
    ignores: ['src/**/*.spec.ts'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      '@angular-eslint': angular,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,

      parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
      },
    },

    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'payment',
          style: 'kebab-case',
        },
      ],

      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Component', 'Page', 'Modal', 'Form'],
        },
      ],

      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'no-console': 'off',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^@|angular', '^@?\\w'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],

      '@typescript-eslint/no-invalid-void-type': ['off'],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: ngParser,
    },
  },
];
