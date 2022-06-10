// ./screens/About.js

import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Plateform} from "react-native";

const Comments = () => {
    return (
        <SafeAreaView style={styles.center}>
            <Text>This is the Comments screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        paddingTop: Plateform === 'ios' ? 0: 40,
        flex: 1,
        alignItems: "center",
        textAlign: "center",
    },
});

export default Comments;