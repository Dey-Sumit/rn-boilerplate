import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SettingsScreen from 'screens/SettingsScreen';
import { RootTabParamList } from 'types/navigation.types';
import HomeStackNavigator from './HomeStackNavigator';
const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);

export default RootTabNavigator;
