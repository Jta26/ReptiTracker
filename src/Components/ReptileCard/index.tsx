import React from "react";

import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View,

} from "react-native";
import ImageSwipe from "../ImageSwipe";

import { ReptileType } from "../../Store/Reptile/Types";

import { ScrollView } from "react-native-gesture-handler";
import styles from "./Style";
import { Reptile } from "../../Store/Reptile/Reptile";

interface IReptileCardProps {
    reptile: Reptile;
    onReptilePress: (reptile: Reptile) => void;
}



const ReptileCard = (props: IReptileCardProps) => {

    const reptilePress = () => {
        props.onReptilePress(props.reptile);
       
    };
    return (
        <TouchableOpacity style={styles.container} onPress={reptilePress}>
            <View style={styles.imageContainer}>
                <Image source={{uri: props.reptile.Pictures[0]}} style={styles.image} ></Image>
            </View>
            <View>
                <Text style={styles.name}>{props.reptile.Name}</Text>
                <Text style={styles.type}>{props.reptile.Type}</Text>
                <Text>Last Fed on {(
                    props.reptile.LastFedDate.getMonth() + 1) +
                    "/" +
                    props.reptile.LastFedDate.getDate() +
                    "/" +
                    props.reptile.LastFedDate.getFullYear()}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ReptileCard;