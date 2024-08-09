import angular from '@angular-eslint/eslint-plugin';
import ngParser from '@angular-eslint/template-parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['src/**/*.ts'],
    ignores: ['src/**/*.spec.ts'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      '@angular-eslint': angular,
      'unused-imports': unusedImports,
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
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
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
