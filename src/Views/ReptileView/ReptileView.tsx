import React from "react";

import { useAuth } from "../../API/Firebase/Auth/Hooks";

import { View, Text, TouchableOpacity } from "react-native";

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


export default ReptileView