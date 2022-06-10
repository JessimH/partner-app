import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";

import UserCircle from "../Global/UserCircle";
import colors from '../../assets/css_variables/Colors';
import CurrentUserCircle from "./CurrentUserCircle";

const UserRow = ({ navigation }) => {
    return (
        <View style={styles.UserRow}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.scrollSection}>
                <CurrentUserCircle />
                <UserCircle profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle />
                <UserCircle profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle />
                <UserCircle profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    UserRow: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
    scrollSection: {
        paddingVertical: 16,
        paddingTop: 0,
        display: "flex",
        flexDirection: 'row',
    }
});

export default UserRow;