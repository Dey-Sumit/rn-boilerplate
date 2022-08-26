import React from 'react';
import ProfileScreen from 'screens/ProfileScreen';
import { HomeStackParamsList } from 'types/navigation.types';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';

const RootStack = createStackNavigator<HomeStackParamsList>();

const HomeStackNavigator = () => (
    <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
);

export default HomeStackNavigator;
