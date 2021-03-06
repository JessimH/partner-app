import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";

import UserCircle from "../Global/UserCircle";
import colors from '../../assets/css_variables/Colors';
import SportCircleWithText from "../Global/SportCircleWithText";

const SectionSport = ({ navigation }) => {
    return (
        <View style={styles.SectionPro}>
            <Text style={styles.sectionTitle}>SÃ©ances autour de vous ð</Text>
            <ScrollView
                contentContainerStyle={{paddingRight: 24, }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true} style={styles.scrollSection}>
                <SportCircleWithText sportType={'â½ï¸'}/>
                <SportCircleWithText sportType={'ðï¸'}/>
                <SportCircleWithText sportType={'â½ï¸'}/>
                <SportCircleWithText sportType={'ð¾ï¸'}/>
                <SportCircleWithText sportType={'ð¥ï¸'}/>
                <SportCircleWithText sportType={'ðï¸â'}/>
                <SportCircleWithText sportType={'ð¼'}/>
                <SportCircleWithText sportType={'â½'}/>
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