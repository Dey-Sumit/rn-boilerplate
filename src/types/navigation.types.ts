import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamsList = {
    Home: undefined;
    Profile: { userId: string };
};

export type RootTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamsList>;
    Settings: undefined;
};
