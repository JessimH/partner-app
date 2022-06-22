import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserCircle from "../Global/UserCircle";
import colors from '../../assets/css_variables/Colors';
import CurrentUserCircle from "./CurrentUserCircle";
import UsersStory from "./UsersStory";

const UserRow = ({ navigation }) => {
    return (
        <View style={styles.UserRow}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.scrollSection}>
                <TouchableOpacity
                    onPress={() =>{}}
                    style={styles.storyAdd}
                >
                    <Ionicons style={styles.addIcon} name="add-outline" color={colors.background} size={25} />
                </TouchableOpacity>
                <UsersStory profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UsersStory profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UsersStory />
                <UsersStory profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UsersStory />
                <UsersStory profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UsersStory />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    UserRow: {
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollSection: {
        paddingVertical: 16,
        paddingBottom: 8,
        paddingTop: 0,
        display: "flex",
        flexDirection: 'row',
    },
    storyAdd: {
        marginLeft: 24,
        marginRight: 8,
        padding: 3,
        marginTop: 7,
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        marginBottom: 4,
        height: 40,
        width: 40,
        borderRadius: 50,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon:{
        marginTop: 2,
        marginLeft: 2,
    }
});

export default UserRow;
