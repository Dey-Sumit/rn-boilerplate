import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from 'types/navigation';

type Props = StackScreenProps<RootStackParamsList, 'Profile'>;
const ProfileScreen = ({ route }: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>User ID: {route.params.userId}</Text>
    </View>
);

export default ProfileScreen;
