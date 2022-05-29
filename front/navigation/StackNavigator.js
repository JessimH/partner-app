// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Map from "../screens/Map";
import Messages from "../screens/Messages";
import SearchTraining from "../screens/SearchTraining";
import Explorer from "../screens/Explorer";
import UserProfil from "../screens/UserProfil";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="StackHome" options={{ title: 'Accueil' }} component={Home} />
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    );
}

const ExplorerStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="Explorer" component={Explorer} />
        </Stack.Navigator>
    );
}

const NotificationsStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}

const MapStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="SearchTraining" component={SearchTraining} />
        </Stack.Navigator>
    );
}

const UserProfilStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="UserProfil" component={UserProfil} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, ExplorerStackNavigator, NotificationsStackNavigator, MapStackNavigator, UserProfilStackNavigator };