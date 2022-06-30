import React, {useRef, useState} from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput} from "react-native";
import colors from "../../assets/css_variables/Colors";

const win = Dimensions.get('window');

const Comment = ({text}) => {
return (
        <View style={styles.commentContainer}>
            <Text style={styles.postTimestamp}>Il y a 10h </Text>
            <View style={styles.postInfos}>
                <View style={styles.UserPic_container}>
                    <Image
                        style={styles.userCircle_pic}
                        source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                    />
                </View>
                <View style={styles.postInfosText}>
                    <Text style={styles.postUsername}>Username</Text>
                    <Text>
                        Je suis un commentaire
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    postInfos:{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    commentContainer:{
        paddingVertical: 8,
        width: win.width,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderColor: '#ebebeb',
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
    postInfosText:{
        marginLeft: 8,
    },
    postUsername: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 4,
    },
    postTimestamp:{
        marginBottom: 4,
        color: colors.gray,
    },
    postBodyText: {
        marginTop: 12,
    },
});

export default Comment;
