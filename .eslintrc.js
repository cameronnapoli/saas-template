// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'next/core-web-vitals',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:json/recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    '.next/',
  ],
  rules: {
    // '@typescript-eslint/no-explicit-any': 'off',
    'import/order': ['error', {
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: [
        ['builtin', 'external'],
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
    }],
    'import/no-named-as-default': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    indent: ['error', 2],
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    // 'react/react-in-jsx-scope': 0,
    // 'react/jsx-tag-spacing': ['error', {
    //   closingSlash: 'never',
    //   beforeSelfClosing: 'always',
    //   afterOpening: 'never',
    // }],
    // // remove this once all props have been ported
    // 'react/prop-types': 0,
    // 'react-native/no-unused-styles': 2,
    // 'react/jsx-props-no-multi-spaces': 2,
    // 'react/jsx-no-duplicate-props': 2,
    semi: 1,
    'quote-props': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 0,
    // 'max-len': ['error', { code: 120 }],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-shadow': 'warn',
    // '@typescript-eslint/no-shadow': 'warn',
    // 'space-infix-ops': 'error',
    // 'json/*': ['error', 'allowComments'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    // 'react/jsx-indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'import/no-anonymous-default-export': 0,
  },
};