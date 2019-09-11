import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Styles from "./style";
interface IButtonProps {
    onPress?: () => void;
}
const Button: React.FC<IButtonProps> = (props) => {

    return (
        <View>
            <TouchableOpacity onPress={props.onPress}><Text>{props.children}</Text></TouchableOpacity>
        </View>
    )
};

export default Button;
