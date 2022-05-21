// ./screens/Contact.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Map = () => {
    return (
        <View style={styles.center}>
            <Text>This is the Map screen</Text>
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

export default Map;