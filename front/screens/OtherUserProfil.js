// ./screens/About.js

import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Plateform} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import UserRow from "../components/Global/UserRow";
import Feed from "../components/Global/Feed";
import UserInfo from "../components/Global/UserInfo";
import colors from "../assets/css_variables/Colors";
import UserBio from "../components/Global/UserBio";

const OtherUserProfil = () => {
    return (
        <SafeAreaView style={styles.center}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <UserInfo isCurentUser={false}/>
                <UserBio />
                <Feed profile={true}/>
            </ScrollView>
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

export default OtherUserProfil;
