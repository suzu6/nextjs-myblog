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
  plugins: ['import', 'unused-imports'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/no-relative-parent-imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'warn',
      {
        // グループ順かつアルファベット順に並べる。グループごとに１行空ける。
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
        'newlines-between': 'always',
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
  parserOptions: {
    ecmaVersion: 12,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
