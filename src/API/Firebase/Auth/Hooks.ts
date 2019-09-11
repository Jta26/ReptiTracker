import React, { useEffect, useState } from "react";
import { IUser } from "../../../Store/User/Types";
import { useNavigation } from "react-navigation-hooks";
import Store from "../../../Store";
import firebase from "react-native-firebase";
import { isEmptyOrSpaces } from "../../../Helpers/FormCheck";

export const useAuth = () => {
    const auth = firebase.auth();
    const navigation = useNavigation();
    const store = Store.useStore();

    const SignInWithEmailAndPassword = async (email: string, password: string) => {
        if (isEmptyOrSpaces(email) || isEmptyOrSpaces(password)) {
            throw new Error("Email or Password Empty");
        }
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            return user.user;
        } catch (err) {
            throw new Error(err.message);
        }
    };
    // Other Sign In Methods (Facebook/google)
    const SignOut = () => {
        firebase.auth().signOut();
    };

    useEffect(() => {
        // Maybe move out 
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
                navigation.navigate("Auth");
            }
        });
    }, []);

    return {
        SignInWithEmailAndPassword,
        SignOut,
    };
};
