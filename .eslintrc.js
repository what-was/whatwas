module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'remix',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import-name/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prefer-arrow-functions'],
  ignorePatterns: ['node_modules/'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/display-name': 0,
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'object-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          ['builtin', 'external'],
          ['internal', 'index', 'sibling', 'parent', 'object'],
        ],
      },
    ],
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
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-namespace': 'off',

    // I can't figure these out:
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',

    '@typescript-eslint/no-throw-literal': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    sourceType: 'module',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
