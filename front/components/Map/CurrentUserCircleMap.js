import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/css_variables/Colors";
import LottieView from 'lottie-react-native';

const CurrentUserCircleMap = () => {
    return (
        <View style={styles.UserCircle}>
            <View style={[styles.UserPic_container, styles.noStory]}>
                <Image
                    style={styles.userCircle_pic}
                    source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                />
                <LottieView
                    autoPlay
                    style={styles.LottieUserLocation}
                    source={require('../../assets/lotties/userLocation.json')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    UserCircle: {
        marginLeft: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        // shadowColor: '#00E2B7',
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 1,
        // shadowRadius: 5,
    },
    userCircle_pic: {
        height: 45,
        width: 45,
        borderRadius: 50,
        zIndex: 1,
    },
    userCircle_username: {
        width: 74,
        fontSize: 12,
        textAlign: "center",
    },
    addStoBtn: {
        position: "absolute",
        right: -2,
        top: 50,
        zIndex: 2,
        backgroundColor: colors.background,
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 1,
    },
    addStoryIcon: {
        color: colors.primary,
    },
    LottieUserLocation: {
        position: 'absolute',
        top: -7.72,
        left: -7.482,
        width: 90,
        height: 90,
    },
});

export default CurrentUserCircleMap;