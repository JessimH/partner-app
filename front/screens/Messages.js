// ./screens/About.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Messages = () => {
    return (
        <View style={styles.center}>
            <Text>This is the Messages screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Messages;