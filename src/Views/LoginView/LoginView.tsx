import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "../../Components/";

import Store from "../../Store";
import { IUser } from "../../Store/User/Types";

import { SignInWithEmailAndPassword } from "../../API/Firebase/Auth";

import styles from "./Style";

import { useNavigation } from "react-navigation-hooks";
import { useAuth } from "../../API/Firebase/Auth/Hooks";

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const store = Store.useStore();
    const Nav = useNavigation();
    const auth = useAuth();
    

    useEffect(() => {
        if (store.get("user").uid !== null) {
            console.log(Nav, store.get("user"));
            Nav.navigate("Main");
        }
    });

    const handleEmailChange = (email: string) => {
        setEmail(email);
    };
    const handlePasswordChange = (password: string) => {
        setPassword(password);
    };
    const handleLoginButtonPress = async () => {
        try {
            const user = await SignInWithEmailAndPassword(email, password);
            const userObj: IUser = {
                uid: user.uid,
                email: user.email,
            };
            store.set("user")(userObj);
        } catch(err) {
            setError(err.message);
        }

    };
    return (
        <View>
            <Text>{error}</Text>
            <Text>Hello {store.get("user").email}</Text>
            <Text>UID {store.get("user").uid}</Text>
            <Input onTextChanged={handleEmailChange} placeholder={"Email"}>{email}</Input>
            <Input onTextChanged={handlePasswordChange} placeholder={"Password"}></Input>
            <Button onPress={handleLoginButtonPress}>Test</Button>
        </View>
    );
};
export default LoginView;
