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

4. 