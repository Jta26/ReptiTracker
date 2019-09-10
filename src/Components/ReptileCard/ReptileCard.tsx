import React from "react";

import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View,
    GestureResponderEvent,

} from "react-native";
import ImageSwipe from "../ImageSwipe/ImageSwipe";

import { ReptileType } from "../../Store/Reptile/Types";

import { ScrollView } from "react-native-gesture-handler";
import styles from "./Style";

interface IReptileCardProps {
    img: string[];
    name: string;
    type: ReptileType;
    lastFedDate: Date;
    onReptilePress: (event: GestureResponderEvent) => void;
}



export const ReptileCard = (props: IReptileCardProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onReptilePress}>
            <View style={styles.imageContainer}>
                <Image source={{uri: props.img[0]}} style={styles.image} ></Image>
            </View>
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.type}>{props.type}</Text>
                <Text>Last Fed on {(
                    props.lastFedDate.getMonth() + 1) +
                    "/" +
                    props.lastFedDate.getDate() +
                    "/" +
                    props.lastFedDate.getFullYear()}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
