import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
eslint.configs.recommended,
...tseslint.configs.recommended,
{
    languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
        ...globals.node,
        ...globals.es2021
    },
    parser: tseslint.parser,
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    },
    files: ['**/*.ts'],
    rules: {
    // TypeScript specific rules
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_', 
        varsIgnorePattern: '^_' 
    }],
    
    // General rules
    'no-console': 'warn',
    'eqeqeq': ['error', 'always'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-unused-vars': 'off', // Turned off in favor of TypeScript's version
    },
},
{
    // Override for test files
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    },
}
);

