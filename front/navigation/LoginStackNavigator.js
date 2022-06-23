// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="StackLogin" options={{ title: 'Login' }} component={Login} />
            <Stack.Screen name="StackRegister" options={{ title: 'Register' }} component={Register} />

        </Stack.Navigator>
    );
}

export { LoginStackNavigator };
