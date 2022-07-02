import React from "react";
import {View, StyleSheet, Text, SafeAreaView, TextInput, ScrollView, Plateform} from "react-native";

import colors from '../assets/css_variables/Colors';
import {Ionicons} from "@expo/vector-icons";


import SectionPro from '../components/Explorer/SectionPro';
import SectionSport from '../components/Explorer/SectionSport';
import SectionStories from '../components/Explorer/SectionStories';


const Explorer = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles.explorer_title}>Salut <Text style={styles.title_username}>Username</Text> 👋,</Text>
                <Text style={styles.explorer_title}>envie de vous surpasser ?🔥</Text>

                <View style={styles.explorer_inputSearch}>
                    <Ionicons style={styles.inputIcon} name="ios-search" size={20}/>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='rgba(60, 60, 67, 0.6)'
                        placeholder="Rechercher sur Partner"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <SectionSport/>
                <SectionStories/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Plateform === 'ios' ? 0 : 40,
        flex: 1,
        textAlign: "left",
    },
    explorer_title: {
        paddingHorizontal: 24,
        fontSize: 24,
        fontWeight: "bold",
    },
    title_username: {
        color: colors.primary
    },
    explorer_inputSearch: {
        marginTop: 24,
        paddingBottom: 8,
        paddingHorizontal: 24,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    input: {
        paddingLeft: 40,
        backgroundColor: 'rgba(118, 118, 128, 0.12)',
        color: 'black',
        fontSize: 16,
        height: 42,
        borderRadius: 8,
        width: "100%",
    },
    inputIcon: {
        position: "absolute",
        top: 10,
        left: 35,
        zIndex: 2,
        color: 'rgba(60, 60, 67, 0.3)',
    }
});

export default Explorer;