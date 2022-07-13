module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['import', 'unused-imports'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'error',
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
}
