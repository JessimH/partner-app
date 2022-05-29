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
                <UserCircle />
                <UserCircle />
                <UserCircle />
                <UserCircle />
                <UserCircle />
                <UserCircle />
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
        display: "flex",
        flexDirection: 'row',
    }
});

export default UserRow;