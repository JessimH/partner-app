// ./App.js

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {LoginStackNavigator} from "./navigation/LoginStackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";


const App = () => {
    const connected = true
    return (
        <NavigationContainer>
            {connected
                ? (<BottomTabNavigator />)
                : (<LoginStackNavigator />)}
        </NavigationContainer>
    );
}
export default App
