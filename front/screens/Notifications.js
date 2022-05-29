// ./screens/Notifications.js

import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

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
    },
});

export default Notifications;