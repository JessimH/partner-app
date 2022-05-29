// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, ExplorerStackNavigator, NotificationsStackNavigator, MapStackNavigator, UserProfilStackNavigator } from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import TabUserCircle from "../components/Global/TabUserCircle";


import colors from '../assets/css_variables/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='TabMap'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'TabHome') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'TabExplorer') {
                        iconName = focused
                            ? 'search'
                            : 'search';
                    } else if (route.name === 'TabMap') {
                        iconName = focused
                            ? 'navigate'
                            : 'navigate-outline';
                    } else if (route.name === 'TabNotifications') {
                        iconName = focused
                            ? 'notifications'
                            : 'notifications-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            })}>
            <Tab.Screen name="TabHome" component={HomeStackNavigator} />
            <Tab.Screen name="TabExplorer" component={ExplorerStackNavigator} />
            <Tab.Screen name="TabMap" component={MapStackNavigator} />
            <Tab.Screen name="TabNotifications" options={{ tabBarBadge: 2 }} component={NotificationsStackNavigator} />
            <Tab.Screen
                name="TabUserProfil"
                component={UserProfilStackNavigator}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        let border;

                        if (route.name === 'TabUserProfil') {
                            border = focused
                        }
                        return <TabUserCircle focus={border} />
                    }
                })}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

