import React from "react";

import { useAuth } from "../../API/Firebase/Auth/Hooks";

import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../Helpers/Colors";

const ReptileView = () => {

    const auth = useAuth();

    const handleSignOut = () => {
        auth.SignOut();
    }
    return (
        <View>
            <Text>
                Test
            </Text>
            <TouchableOpacity onPress={handleSignOut}><Text>Sign Out</Text></TouchableOpacity>
        </View>
    )
};

ReptileView.navigationOptions = {
    headerTitle: "My Reptiles",
    headerLayoutPreset: 'center',
    headerStyle: {
        backgroundColor: Colors.SecondaryColor,
        
    },
    headerTitleStyle: {
        color: Colors.SecondaryTextColor
    }

}

export default ReptileView