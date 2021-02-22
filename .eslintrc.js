module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'comma-dangle': 0,
    'import/no-duplicates': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
  },
  parser: '@typescript-eslint/parser',
};
