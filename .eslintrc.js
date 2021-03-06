module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  plugins: ['unused-imports'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/no-relative-parent-imports': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'warn',
      {
        // グループ順かつアルファベット順に並べる。
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  // Abobe Warning: React version not specified in eslint-plugin-react settings.
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': 'webpack',
  },
}
