import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/css_variables/Colors";

const TabUserCircle = (props) => {
    return (
        <View style={styles.UserCircle}>
            <View style={props.focus ? styles.UserPic_focused : styles.UserPic_noFocused}>
                <Image
                    style={styles.userCircle_pic}
                    source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    UserCircle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
    },
    UserPic_focused: {
        padding: 2,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 50,
    },
    UserPic_noFocused: {
        padding: 2,
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 50,
    },
    userCircle_pic: {
        height: 25,
        width: 25,
        borderRadius: 50,
        zIndex: 1,
    },
});

export default TabUserCircle;