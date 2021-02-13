module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['mocha'],
  rules: {
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    camelcase: 'error',
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off',
    curly: 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'id-blacklist': ['error', 'e'],
    'id-length': ['error', { min: 1 }],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-params': ['error', { max: 4 }],
    'multiline-comment-style': ['error', 'bare-block'],
    'new-cap': ['error', { capIsNew: true, newIsCap: true }],
    'no-array-constructor': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-eval': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-unused-expressions': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-return-await': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: ['error', 'single', 'avoid-escape'],
    'sort-imports': 'error',
    'spaced-comment': 'error',
    strict: 'off',
    yoda: 'error',
  },
  overrides: [
    {
      files: '*.test.js',
      rules: {
        'no-unused-expressions': 'off',
        'mocha/handle-done-callback': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/valid-suite-description': 'off',
        'mocha/valid-test-description': 'off',
      },
    },
  ],
};