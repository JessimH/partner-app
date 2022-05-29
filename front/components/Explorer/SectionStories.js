import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";

import colors from '../../assets/css_variables/Colors';
import StoryPreview from "./StoryPreview";

const SectionSport = ({ navigation }) => {
    return (
        <View style={styles.SectionPro}>
            <Text style={styles.sectionTitle}>Stories et Lives pour vous</Text>
            <View style={styles.StoryPreview_section}>
                <StoryPreview />
                <StoryPreview />
                <StoryPreview />
                <StoryPreview />
                <StoryPreview />
                <StoryPreview />
                <StoryPreview />
                <StoryPreview />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    SectionPro: {
        marginTop: 16,
    },
    sectionTitle: {
        paddingHorizontal: 24,
        fontWeight: 'bold',
        fontSize: 24,
    },
    StoryPreview_section: {
        paddingHorizontal: 24,
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    }
});

export default SectionSport;