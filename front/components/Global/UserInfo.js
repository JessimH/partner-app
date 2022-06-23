import React from "react";
import { View, Button, Text, StyleSheet, FlatList, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";
import CurrentUserCircle from "./CurrentUserCircle";
import SportTag from "./SportTag";

const userInfo = ({ navigation, openSendPost, isCurentUser }) => {
    return (
        <View style={styles.userInfos}>
            <CurrentUserCircle isCurentUser={isCurentUser}/>
            <View style={styles.userInfosText}>
                <View style={styles.userInfosStats}>
                    <View style={styles.userInfosStat}>
                        <Text style={styles.userInfosTextBold}>54</Text>
                        <Text style={styles.userInfosTextDesc}>séances</Text>
                    </View>
                    <View style={styles.userInfosStat}>
                        <Text style={styles.userInfosTextBold}>1k</Text>
                        <Text style={styles.userInfosTextDesc}>Abonnés</Text>
                    </View>
                    <View style={styles.userInfosStat}>
                        <Text style={styles.userInfosTextBold}>137</Text>
                        <Text style={styles.userInfosTextDesc}>Partners</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userInfos:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    userInfosText:{
        paddingLeft: 16,
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    userInfosStats:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    userInfosStat:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    userInfosTextBold:{
        fontWeight: 'bold',
        fontSize: 16
    }

});

export default userInfo;