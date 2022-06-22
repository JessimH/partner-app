import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";
import SportTag from "./SportTag";

const UserBio = ({ navigation, sportTexte }) => {
    return (
        <View style={styles.userBio}>
            <Text style={styles.userName}>Jessh-94</Text>
            <Text style={styles.userBioText}>La boxe n’est pas qu’un sport, c’est un mode de vie.</Text>
            <View style={styles.userInfosSports}>
                <SportTag sportTexte={'🥊 Boxe'}/>
                <SportTag sportTexte={'🏀 Basket'}/>
                <SportTag sportTexte={'⚽️ Foot'}/>
                <SportTag sportTexte={'🎾 Tennis'}/>
                <SportTag sportTexte={'🏋️‍ Muscu'}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userBio:{
        paddingLeft: 24,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    userName:{
        paddingTop: 8,
        width: '70%',
        fontWeight: 'bold',
    },
    userBioText:{
        paddingVertical: 8,
        width: '70%',
    },
    userInfosSports:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default UserBio;