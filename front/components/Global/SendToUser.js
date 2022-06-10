import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";

const SendToUser = ({ }) => {
    return (
        <View style={styles.sendToUser}>
            <TouchableOpacity style={styles.sendToUser}>
                <View style={styles.UserPic_container}>
                    <Image
                        style={styles.userCircle_pic}
                        source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                    />
                </View>
                <Text style={styles.btnUsername}>User name</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    sendToUser: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
    },
    UserPic_container: {
        borderRadius: 50,
        width: 32
    },
    userCircle_pic: {
        height: 32,
        width: 32,
        borderRadius: 50,
    },
    btnUsername:{
        marginLeft: 8,
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default SendToUser;