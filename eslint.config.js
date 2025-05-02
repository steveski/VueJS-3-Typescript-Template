import vueParser from 'vue-eslint-parser';
import vue from 'eslint-plugin-vue';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript,
    },
    rules: {
      // manually add the specific rules you want:
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      // add more individual rules here as needed
    },
  },
];
