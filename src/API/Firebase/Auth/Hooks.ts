import React, { useEffect, useState } from "react";
import { IUser } from "../../../Store/User/Types";
import { useNavigation } from "react-navigation-hooks";
import Store from "../../../Store";
import firebase from "react-native-firebase";

export const useAuth = () => {
    const auth = firebase.auth();
    const navigation = useNavigation();
    const store = Store.useStore();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            const userObj: IUser = {
                email: null,
                uid: null,
            };
            if (user) {
                userObj.email = user.email;
                userObj.uid = user.uid;
                store.set("user")(userObj);
            }
            else {
                store.set("user")(userObj);
                navigation.navigate("Home");
            }
        });
    }, []);



}