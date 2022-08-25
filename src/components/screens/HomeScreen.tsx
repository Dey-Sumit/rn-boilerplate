import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from 'types/navigation';

type Props = StackScreenProps<RootStackParamsList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
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
    </View>
);

export default HomeScreen;
