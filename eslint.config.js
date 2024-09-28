const tseslint = require('typescript-eslint');
const config = require('eslint-config-final');
const globals = require('globals');

module.exports = tseslint.config(
    {
        ignores: [
            '**/node_modules/',
            '**/e2e/',
            'src/environments/',
        ],
    },
    {
        files: ['**/*.js'],

        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es6,
                ...globals.node,
            },
        },

        extends: [
            ...config.javascript,
        ],

        rules: {
            eqeqeq: 'off',
            'no-unused-vars': 'off',
        },
    }
);
