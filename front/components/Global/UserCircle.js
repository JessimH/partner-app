import React from "react";
import { View, Button, Text, StyleSheet,TouchableWithoutFeedback, SafeAreaView, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";

const UserCircle = ({ navigation, profilPic }) => {
    return (
        <View style={styles.UserCircle}>
            <TouchableWithoutFeedback style={styles.UserPic_container}
                                      onPress={() => navigation.navigate("OtherUserProfil")}>
                {profilPic
                    ? (<Image
                        style={styles.userCircle_pic}
                        source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                        />)
                    :(<Image
                        style={styles.userCircle_pic}
                        source={{ uri: 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png' }}
                    />)
                }
            </TouchableWithoutFeedback>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.userCircle_username}>Username</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    UserCircle: {
        marginLeft: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    UserPic_container: {
        borderRadius: 50,
        marginBottom: 4
    },
    userCircle_pic: {
        height: 64,
        width: 64,
        borderRadius: 50,
    },
    userCircle_username: {
        width: 74,
        fontSize: 12,
        fontWeight: "700",
        textAlign: "center",
    }
});

export default UserCircle;