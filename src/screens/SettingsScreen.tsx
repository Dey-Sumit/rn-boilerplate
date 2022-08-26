import { Text, View } from 'react-native';
import React from 'react';
import AppButton from 'components/commons/AppButton';
import { RootTabParamList } from 'types/navigation.types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<RootTabParamList, 'Settings'>;
const SettingsScreen = ({ navigation }: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
        <AppButton
            text="Go to Profile"
            onPressHandler={() =>
                navigation.navigate('HomeStack', {
                    screen: 'Profile',
                    params: {
                        userId: 'abc123_from_settings'
                    }
                })
            }
        />
    </View>
);

export default SettingsScreen;
