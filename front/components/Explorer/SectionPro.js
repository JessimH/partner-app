import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";

import UserCircle from "../Global/UserCircle";
import colors from '../../assets/css_variables/Colors';

const SectionPro = ({ navigation }) => {
    return (
        <View style={styles.SectionPro}>
            <Text style={styles.sectionTitle}>Partner Pro 💪</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true} style={styles.scrollSection}>
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
    SectionPro: {
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
    sectionTitle: {
        paddingHorizontal: 24,
        fontWeight: 'bold',
        fontSize: 24,
    },
    scrollSection: {
        paddingVertical: 16,
        display: "flex",
        flexDirection: 'row',
    }
});

export default SectionPro;