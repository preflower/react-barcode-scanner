module.exports = {
  extends: [
    '@preflower/eslint-config-basic',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        // TS
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        // Override JS
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        // Off
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ]
}
