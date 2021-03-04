module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'no-param-reassign': ['error', { props: false }],
        'no-unused-vars': 'warn',
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: false,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'no-restricted-syntax': 'off',
        'no-prototype-builtins': 'off',
        'no-bitwise': ['error', { int32Hint: true }],
        radix: ['error', 'as-needed'],
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    },
};
