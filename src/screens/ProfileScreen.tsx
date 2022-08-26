import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamsList } from 'types/navigation.types';

type Props = StackScreenProps<HomeStackParamsList, 'Profile'>;
const ProfileScreen = ({ route }: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>User ID: {route.params?.userId || 'No valid user id'}</Text>
    </View>
);

export default ProfileScreen;
