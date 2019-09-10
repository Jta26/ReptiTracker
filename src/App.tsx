import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";

import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import AuthLoadingView from "./Views/Auth/AuthLoadingView";
import LoginView from "./Views/LoginView/LoginView";
import ReptilesView from "./Views/ReptilesView/ReptilesView";

import Store from "./Store";

const AuthNav = createStackNavigator(
    {
        Login: LoginView,
    },
    {
        initialRouteName: "Login",
        headerMode: "none",
    },
);

const MainNav = createStackNavigator(
    {
        Main: {
            screen: ReptilesView,
        },
    },
    {
        initialRouteName: "Main",
    },
);

const AppNavigation = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingView,
        Auth: AuthNav,
        Main: MainNav,
    },
    {
        initialRouteName: "AuthLoading",
    },
);
const AppContainer = createAppContainer(AppNavigation);

const App = () => {
    return (
        <Store.Container>
            <AppContainer/>
        </Store.Container>
    );
};

export default App;
