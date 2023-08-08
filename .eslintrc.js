module.exports = {
  "env": {
    "browser": true,
    node: true,
    "es2021": true
  },
  "extends": [
    'standard',
    'standard-react',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'template-curly-spacing': 'off',
    'no-template-curly-in-string': 'off',
    indent: 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'one-var': 'off',
    'no-prototype-builtins': 'warn',
    'prefer-promise-reject-errors': 'off',
    'standard/object-curly-even-spacing': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-handler-names': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    'react/jsx-indent-props': [2, 2],
    'jest/no-conditional-expect': 'warn',
    'jest/expect-expect': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        trailingComma: 'all',
        semi: false,
        endOfLine: 'auto',
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: false,
      },
    ],
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
  }
}
