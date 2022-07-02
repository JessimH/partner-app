// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExplorerStackNavigator, NotificationsStackNavigator, MapStackNavigator, UserProfilStackNavigator } from "./StackNavigator";
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
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'TabExplorer') {
                        iconName = focused
                            ? 'people-outline'
                            : 'people-outline';
                    } else if (route.name === 'TabMap') {
                        iconName = focused
                            ? 'location-outline'
                            : 'location-outline';
                    } else if (route.name === 'TabNotifications') {
                        iconName = focused
                            ? 'notifications-outline'
                            : 'notifications-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: colors.gray,
            })}>
            <Tab.Screen name="TabMap" component={MapStackNavigator}
                        options={({ route }) => ({
                            tabBarLabel: 'Séances',
                            unmountOnBlur: true,
                        })}/>
            <Tab.Screen name="TabExplorer" component={ExplorerStackNavigator}
                        options={({ route }) => ({
                            tabBarLabel: 'Coachs',
                            unmountOnBlur: true,
                        })}/>
            <Tab.Screen name="TabNotifications"  component={NotificationsStackNavigator}
                        options={({ route }) => ({
                            tabBarBadge: 2,
                            tabBarLabel: 'Notifications',
                            unmountOnBlur: true,
                        })}/>
            <Tab.Screen
                name="TabUserProfil"
                component={UserProfilStackNavigator}
                options={({ route }) => ({
                    tabBarLabel: 'Profile',
                    unmountOnBlur: true,
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

