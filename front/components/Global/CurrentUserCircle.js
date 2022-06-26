import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/css_variables/Colors";
import { Ionicons } from "@expo/vector-icons";
// import { Camera, CameraType } from 'expo-camera';

const CurrentUserCircle = ({ navigation, isCurentUser }) => {
    return (
        <View style={styles.UserCircle}>
            <View style={[styles.UserPic_container, styles.noStory]}>
                <Image
                    style={styles.userCircle_pic}
                    source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                />
            </View>
            {/*{isCurentUser && (
                <TouchableOpacity
                    style={styles.addStoBtn}>
                    <Ionicons style={styles.addStoryIcon} name="add-circle" size={23} />
                </TouchableOpacity>
            )}*/}
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
    },
    UserPic_container: {
        padding: 3,
        borderRadius: 50,
        borderWidth: 2,
        marginBottom: 4
    },
    proBorder: {
        borderColor: colors.primary
    },
    normalBorder: {
        borderColor: colors.secondary
    },
    noStory: {
        borderColor: colors.noSto
    },
    userCircle_pic: {
        height: 64,
        width: 64,
        borderRadius: 50,
    },
    userCircle_username: {
        width: 74,
        fontSize: 12,
        textAlign: "center",
    },
    addStoBtn: {
        position: "absolute",
        top: 50,
        right: -4 ,
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
    }
});

export default CurrentUserCircle;