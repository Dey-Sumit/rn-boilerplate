import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'components/screens/HomeScreen';
import ProfileScreen from 'components/screens/ProfileScreen';
import { RootStackParamsList } from 'types/navigation';

const RootStack = createStackNavigator<RootStackParamsList>();

const App = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Profile" component={ProfileScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default App;
