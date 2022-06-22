// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="StackLogin" options={{ title: 'Login' }} component={Login} />
        </Stack.Navigator>
    );
}

export { LoginStackNavigator };
