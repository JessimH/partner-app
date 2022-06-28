import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {LoginStackNavigator} from "./navigation/LoginStackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import colors from "./assets/css_variables/Colors";

import {useSelector} from "react-redux";

const RootNavigation = () => {
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

    const connected =  useSelector(s => s.userAuth);

    useEffect(() => {
        console.log('connected', connected);
        if(connected) {
            return
        }
    }, [connected]);

    return (
            <NavigationContainer>
                {connected
                    ? (<BottomTabNavigator />)
                    : (<LoginStackNavigator />)}
                <Toast config={toastConfig}/>
            </NavigationContainer>
    );
}
export default RootNavigation
