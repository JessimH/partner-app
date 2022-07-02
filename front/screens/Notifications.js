// ./screens/Notifications.js

import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Plateform} from "react-native";
import colors from "../assets/css_variables/Colors";
import ScreenHeader from "../components/Global/ScreenHeader";

const Notifications = () => {
    return (
        <SafeAreaView style={styles.center}>
            <ScreenHeader messageScreen={false}
                          noGoBack={true}
                          title="Notifications"
            />
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

export default Notifications;