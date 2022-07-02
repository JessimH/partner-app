// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Notifications from "../screens/Notifications";
import Map from "../screens/Map";
import Messages from "../screens/Messages";
import SearchTraining from "../screens/SearchTraining";
import Explorer from "../screens/Explorer";
import UserProfil from "../screens/UserProfil";
import UpdateProfile from "../screens/UpdateProfile";
import OtherUserProfil from "../screens/OtherUserProfil";

const Stack = createStackNavigator();

const ExplorerStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name="Explorer" component={Explorer} />
            <Stack.Screen name="OtherUserProfil" component={OtherUserProfil} />
            <Stack.Screen name="Messages" component={Messages} />
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
            <Stack.Screen name="OtherUserProfil" component={OtherUserProfil} />
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
            <Stack.Screen name="OtherUserProfil" component={OtherUserProfil} />
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
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="OtherUserProfil" component={OtherUserProfil} />
        </Stack.Navigator>
    );
}

export { ExplorerStackNavigator, NotificationsStackNavigator, MapStackNavigator, UserProfilStackNavigator };