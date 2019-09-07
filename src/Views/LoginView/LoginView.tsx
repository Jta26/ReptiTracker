import React, { useState, useEffect, Fragment } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView} from "react-native";

import Store from "../../Store";
import { IUser } from "../../Store/User/Types";

import styles from "./Style";

import { useNavigation } from "react-navigation-hooks";
import { useAuth } from "../../API/Firebase/Auth/Hooks";

import { Button } from 'react-native-material-ui';
import style from "../../Components/Button/style";
import Style from "./Style";
import Colors from "../../Helpers/Colors";

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
            await auth.SignInWithEmailAndPassword(email, password);
        } catch(err) {
            setError(err.message);
        }

    };
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={50}>
                <Image source={require('../../../assets/images/Logo.png')} style={styles.titleImage} resizeMode='contain'/>

                <Text style={styles.title}>ReptiTracker</Text>
                <Text style={styles.error}>{error}</Text>
                <TextInput placeholder='Email' placeholderTextColor={Colors.SecondaryTextColor} value={email} onChangeText={handleEmailChange} style={styles.input}/>
                <TextInput placeholder='Password' placeholderTextColor={Colors.SecondaryTextColor} value={password} onChangeText={handlePasswordChange} secureTextEntry style={styles.input}/>
                <TouchableOpacity style={styles.button} onPress={handleLoginButtonPress}><Text style={styles.buttonText}>Sign In</Text></TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};
export default LoginView;
