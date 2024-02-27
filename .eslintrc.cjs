module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: "es5",
        arrowParens: "always",
        endOfLine: "auto"
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    "no-unused-vars": "off", "@typescript-eslint/no-unused-vars": "error",
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
  },
}
