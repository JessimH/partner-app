// ./screens/About.js

import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import UserRow from "../components/Global/UserRow";
import Feed from "../components/Global/Feed";
import colors from "../assets/css_variables/Colors";

const UserProfil = () => {
    return (
        <SafeAreaView style={styles.center}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Feed />
            </ScrollView>
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

export default UserProfil;