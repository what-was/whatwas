module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb-base-typescript-prettier', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		extraFileExtensions: ['.json'],
	},
	plugins: ['react', '@typescript-eslint', 'prefer-arrow-functions'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', '.'],
			},
		},
	},
	rules: {
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'import/extensions': [
			'error',
			'always',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/function-component-definition': [
			2,
			{ namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
		],
		semi: ['error', 'always'],
	},
};
