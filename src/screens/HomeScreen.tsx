import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamsList } from 'types/navigation.types';
import AppButton from 'components/commons/AppButton';
import Svg, { Circle } from 'react-native-svg';

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
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
            <Circle
                cx="50"
                cy="50"
                r="50"
                stroke="purple"
                strokeWidth=".5"
                fill="violet"
            />
        </Svg>

        {/* <AppButton
            text="Go to Settings"
            onPressHandler={() => navigation.navigate('Home')}
        /> */}
    </View>
);

export default HomeScreen;
