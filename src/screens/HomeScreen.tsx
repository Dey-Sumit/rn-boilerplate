import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamsList } from 'types/navigation.types';
import AppButton from 'components/commons/AppButton';

type Props = StackScreenProps<HomeStackParamsList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            style={{
                fontSize: 20,
                fontFamily: 'LibreBaskerville-Bold'
            }}
        >
            Home Screen
        </Text>
        <AppButton
            text="Go to Profile"
            onPressHandler={() =>
                navigation.navigate('Profile', {
                    userId: 'abc123'
                })
            }
        />
        {/* <AppButton
            text="Go to Settings"
            onPressHandler={() => navigation.navigate('Home')}
        /> */}
    </View>
);

export default HomeScreen;
