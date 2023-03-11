module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier',
        'import'
    ],
    'rules': {
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'quotes': [
            'error',
            'single'
        ],
        'no-duplicate-imports': 'error',
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'react/self-closing-comp': [
            'error',
            {
                'component': true,
                'html': true
            }
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                'prefer': 'type-imports'
            }
        ],
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type'
                ],
                'pathGroups': [
                    {
                        'pattern': '@/**/**',
                        'group': 'parent',
                        'position': 'before'
                    }
                ],
                 'alphabetize': {
                    'order': 'asc'
                }
            }
        ],
        'no-restricted-imports': [
            'error',
            {
               'patterns': ['../']
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    },
    'settings': {
        'import/resolver': {
            'typescript': {
            }
        },
        'react': {
            'version': 'detect'
        }
    }
}
