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

// create the .husky/pre-commit file and add the script to it
npx husky add .husky/pre-commit "yarn lint"

// now let's say we want to run both prettier and eslint on all the files that are staged on Git.
=> add this in package.json (not as script)
...
     "lint-staged": {
        "src/**/*.{js,jsx,ts,tsx}": [
            "yarn lint",
            "yarn prettier:write"
        ]
    }
  ...

// now just go the pre-commit file and add the script to it

yarn lint-staged

// DONE 🚀

// Let's go one step deeper and add a hook for the post-merge event.

npx husky add .husky/post-merge  "yarn && npx pod-install"

```

5. Lint Commit Message
   https://commitlint.js.org/#/

```
yarn add -D  @commitlint/cli @commitlint/config-conventional
```

```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

Create the commit-msg hook

```
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

---

---

Adding Custom Fonts :

1. download the fonts , make sure the font name is in this format NotoSerif-Bold.ttf not NotoSerifBBold.ttf else in ios it will not work

2. add the font in the root/assets or src/assets folder (wherever)

3. create a react-native.config.js file in the root folder

```

/* eslint-disable comma-dangle */
module.exports = {
    project: {
        ios: {},
        android: {} // grouped into "project"
    },
    assets: ['./assets/fonts/'] // stays the same
};
```

next run this command to link the assets folder

```
npx react-native-asset
```

---

### Adding react-native-vector-icons

1. Install the package and run pod-install
2. Ios:
    1. get the fonts folder inside node_modules/react-native-vector-icons/fonts
    2. open the ios project , put the fonts folder under project-name => project-name => here
       (same level where the info.plist is located)
    3. go to info.plist and add the "Fonts provided by application" as a new key (this should be already there if you have any custom fonts added)
    4. add all the fonts one-by-one as item-<number> as key and the name with extension as the value
       or if it seems boring ,add one font(it will create the stricture of the file) and then just open the info.plist file in vs-code add the string here
    ```
    ...
    	<string>LibreBaskerville-Regular.ttf</string>
    	<string>Fontisto.ttf</string>
    	<string>Octicons.ttf</string>
    	<string>AntDesign.ttf</string>
    ...
    ```

error: Multiple commands produce '/Users/sumit/Library/Developer/Xcode/DerivedData/rn_boilerplate-bwzqecretfsmzjckgwbyjcndnmiv/Build/Products/Debug-iphonesimulator/rn_boilerplate.app/AntDesign.ttf'
then delete all the react-native-v-i fonts fonts build-phase => copy bundle resources and re-build
---

Part 6 : Adding react native navigation
https://reactnavigation.org/docs/getting-started/

```
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native
npx pod-install

// Android : go to java/<your package name>/MainActivity.java and add the following code

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

// at the top of the file
import android.os.Bundle;

// Wrap your app with NavigationContainer
 import { NavigationContainer } from '@react-navigation/native';

```

https://reactnavigation.org/docs/hello-react-navigation

```
yarn add @react-navigation/native-stack
npx pod-install
```

if you get RnStackHeader not found , then

-   remove react-native-screens package and reinstall it
-   rebuild the ios app=> yarn ios

---

Cool , so it gives you native navigation but it does not give options to customize the animation . So, for that we will be using the stack navigator

```
yarn add @react-navigation/stack react-native-gesture-handler && npx pod-install
```

=> add the following at the top of root/index.js

```
import 'react-native-gesture-handler';
```

-   Create a new Profile Screen and add that in the navigation stack
-   Update the Home Screen to navigate to the Profile Screen

```

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity
            style={{
                margin: 10,
                padding: 10,
                borderWidth: 1
            }}
            onPress={() => navigation.navigate('Profile')}
        >
            <Text>Go to Profile</Text>
        </TouchableOpacity>
    </View>
);

export default HomeScreen;

```

Let's add typescript in the navigation stack

```
export type RootStackParamsList = {
    Home: undefined;
    Profile: { userId: string };
};

// Home Screen =>

import { RootStackParamsList } from 'types/navigation';

type Props = StackScreenProps<RootStackParamsList, 'Home'>;

 <TouchableOpacity
            style={{
                margin: 10,
                padding: 10,
                borderWidth: 1
            }}
            onPress={() =>
                navigation.navigate('Profile', {
                    userId: '123'
                })
            }
        >
            <Text>Go to Profile</Text>
        </TouchableOpacity>

 // Profile Screen =>

type Props = StackScreenProps<RootStackParamsList, 'Profile'>;
const ProfileScreen = ({ route }: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>User ID: {route.params.userId}</Text>
    </View>
);

```

### Add Tabs Navigator

---

# Handle Error

## 1. React Native on Apple Silicon M1 - The linked library 'libPods-ProjectName.a' is missing one or more architectures :

=> run xcode with rosetta , clean the build folder , build the app

## 2. Version Incompatibility :

=> watchman watch-del-all && npx react-native start --reset-cache
