// ./screens/About.js

import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const UserProfil = () => {
    return (
        <SafeAreaView style={styles.center}>
            <Text>This is the UserProfil</Text>
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

export default UserProfil;