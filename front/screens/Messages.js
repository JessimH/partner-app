// ./screens/About.js

import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Plateform} from "react-native";
import colors from "../assets/css_variables/Colors";

const Messages = () => {
    return (
        <SafeAreaView style={styles.center}>
            <Text>This is the Messages screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        paddingTop: Plateform === 'ios' ? 0: 40,
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: colors.background,
    },
});

export default Messages;