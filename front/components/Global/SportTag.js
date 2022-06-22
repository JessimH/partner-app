import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";

const SportTag = ({ navigation, sportTexte }) => {
    return (
        <View style={styles.sportTag}>
            <Text style={styles.sportTagText}>{sportTexte}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sportTag:{
        backgroundColor: colors.translu,
        padding: 6,
        paddingHorizontal: 8,
        borderRadius: 20,
        marginRight: 8,
        marginTop: 8,
    },
    sportTagText:{
        color: colors.primary,
        fontWeight: 'bold',
    }
});

export default SportTag;