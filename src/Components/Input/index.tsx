import React from "react";
import { TextInput, View } from "react-native";

import Styles from "./style";

interface IInputProps {
    placeholder: string;
    onTextChanged: (text: string) => void;
}
const Input: React.FC<IInputProps> = (props) => {
    return (
        <View style={Styles.Container}>
            <TextInput
                style={Styles.Input}
                placeholder={props.placeholder}
                onChangeText={props.onTextChanged}
            >
            {props.children}
            </TextInput>
        </View>
    );
};

export default Input;
