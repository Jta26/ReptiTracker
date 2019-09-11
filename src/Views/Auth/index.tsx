import React, { useEffect } from "react";
import {
    ActivityIndicator,
    View,
} from "react-native";

import Store from "../../Store";
import { useNavigation } from "react-navigation-hooks";
import { useAuth } from "../../API/Firebase/Auth/Hooks";

const AuthLoadingView = () => {
    const Nav = useNavigation();
    const store = Store.useStore();
    const auth = useAuth();
    const uid = store.get("user").uid;

    useEffect(() => {
        Nav.navigate(uid ? "Main" : "Auth");
    }, [uid]);

    return (
        <View>
            <ActivityIndicator/>
        </View>
    );
};

export default AuthLoadingView;
