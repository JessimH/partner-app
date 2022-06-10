// ./screens/Notifications.js

import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import colors from "../assets/css_variables/Colors";

const Notifications = () => {
    return (
        <SafeAreaView style={styles.center}>
            <Text>This is the Notifications screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: colors.background,
    },
});

export default Notifications;