Build a boilerplate together :
<br/>

1. init with rn-cli =>

```
 npx react-native init rn_boilerplate --version 0.68.2
 => run the app : yarn ios or yarn android
 if you face error , related to default node, eg:
```

"You need to run "nvm install default" to install it before using it.
Command PhaseScriptExecution failed with a nonzero exit code"

=> Then set the default node version using nvm

```
nvm list
nvm alias default 16
```

2. add typescript :

```
 yarn add -D typescript @types/react @types/react-native
 // change the file extension to .ts and .tsx
```

3. Add path alias

```
    ...
    "paths": {
      "*": ["src/*"],
      "@components/*": ["src/components/*"]
    },
    ...
```

```
  ...
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
        },
      },
    ],
  ],
  ...
```

```
=> Now try to import components from @components

import Demo from '@components/Demo';
```

4. add eslint and prettier

```
yarn add -D eslint prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-config-prettier
```

```
.eslintrc.js =>

module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', '@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'react/jsx-uses-react': 1,
                'arrow-body-style': ['error'],
                'comma-dangle': 'off'
            }
        }
    ]
};

```

```
.prettierrc =>

{
  "singleQuote": true,
  "trailingComma": "none",
  "tabWidth": 4,
  "semi": true
}
```

4. husky and lint-staged

Git has the Hook feature. When some events(commit, push, etc) are triggered on Git, you can use the Hook feature to execute scripts that are configured on the Hook.
Husky makes you use Git Hook more simply.

lint-staged makes you execute scripts to files that are staged on Git.

```
yarn add husky lint-staged -D

=> set a script in package.json
{
...
 prepare : "husky install"
...
}

yarn perpare => it should create the .husky folder

npx husky add .husky/pre-commit "yarn lint"   => it should create the .husky/pre-commit file and add the script to it

```
