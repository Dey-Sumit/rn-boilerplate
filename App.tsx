import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootTabNavigator from 'navigator/RootTabNavigator';

const App = () => (
    <NavigationContainer>
        <RootTabNavigator />
    </NavigationContainer>
);

export default App;
