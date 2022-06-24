// ./App.js

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {LoginStackNavigator} from "./navigation/LoginStackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import colors from "./assets/css_variables/Colors";

const App = () => {
    const toastConfig = {

        success: (props) => (
            <BaseToast
                {...props}
                style={{ borderLeftColor: colors.primary }}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                text1Style={{
                    fontSize: 15,
                    fontWeight: '700'
                }}
            />
        ),

        error: (props) => (
            <ErrorToast
                {...props}
                style={{ borderLeftColor: colors.secondary }}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                text1Style={{
                    fontSize: 15,
                    fontWeight: '700'
                }}
            />
        ),
    };

    const connected = false
    return (
            <NavigationContainer>
                {connected
                    ? (<BottomTabNavigator />)
                    : (<LoginStackNavigator />)}
                <Toast config={toastConfig}/>
            </NavigationContainer>
    );
}
export default App
