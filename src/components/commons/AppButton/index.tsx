import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
    onPressHandler: (e: GestureResponderEvent) => void;
    text: string;
}

const AppButton = ({ onPressHandler, text }: Props) => (
    <TouchableOpacity style={styles.root} onPress={onPressHandler}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

export default AppButton;
