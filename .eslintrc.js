module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import-name/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['prettier', 'plugin:@typescript-eslint/recommended'],

      parserOptions: { project: ['./tsconfig.json'] },
    },
  ],
  plugins: ['prettier', 'jsx-a11y', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['~', './app']],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'app/', 'app/**/*'],
      },
    },
  },
  rules: {
    'global-require': 0,
    'default-param-last': 0,
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'jsx-a11y/html-has-lang': 0,
    'no-return-await': 0,
    'object-curly-newline': ['error', { multiline: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'object-curly-spacing': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'key-spacing': [
      'error',
      {
        multiLine: {
          beforeColon: false,
          afterColon: true,
        },
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 140,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'import/no-mutable-exports': 0,
    'import/order': [
      2,
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          ['builtin', 'external'],
          ['internal', 'index', 'sibling', 'parent', 'object'],
        ],
      },
    ],

    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/unbound-method': 0,
    'no-console': 'warn',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "prettier",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:@typescript-eslint/eslint-recommended",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react", "@typescript-eslint"],
//   rules: {
//     "prefer-const": "off",
//     "react/react-in-jsx-scope": "off",
//   },
// };
