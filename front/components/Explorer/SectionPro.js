import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";

import UserCircle from "../Global/UserCircle";
import colors from '../../assets/css_variables/Colors';

const SectionPro = ({ navigation }) => {
    return (
        <View style={styles.SectionPro}>
            <Text style={styles.sectionTitle}>Rencontrez de nouveaux Partners ! 🤝</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true} style={styles.scrollSection}>
                <UserCircle navigation={navigation}
                            profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle navigation={navigation}
                            profilPic={'https://pbs.twimg.com/profi000000le_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle />
                <UserCircle navigation={navigation}
                            profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle />
                <UserCircle navigation={navigation}
                            profilPic={'https://pbs.twimg.com/profile_images/1377737397170016268/0WO1bJEW_400x400.jpg'} />
                <UserCircle />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    SectionPro: {
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
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