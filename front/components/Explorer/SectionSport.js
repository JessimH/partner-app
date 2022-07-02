import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";

import UserCircle from "../Global/UserCircle";
import colors from '../../assets/css_variables/Colors';
import SportCircleWithText from "../Global/SportCircleWithText";

const SectionSport = ({ navigation }) => {
    return (
        <View style={styles.SectionPro}>
            <Text style={styles.sectionTitle}>Séances autour de vous 📍</Text>
            <ScrollView
                contentContainerStyle={{paddingRight: 24, }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true} style={styles.scrollSection}>
                <SportCircleWithText sportType={'⚽️'}/>
                <SportCircleWithText sportType={'🏀️'}/>
                <SportCircleWithText sportType={'⚽️'}/>
                <SportCircleWithText sportType={'🎾️'}/>
                <SportCircleWithText sportType={'🥊️'}/>
                <SportCircleWithText sportType={'🏋️‍'}/>
                <SportCircleWithText sportType={'🛼'}/>
                <SportCircleWithText sportType={'⚽'}/>
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

export default SectionSport;