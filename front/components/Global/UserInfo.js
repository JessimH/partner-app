import React from "react";
import { View, Button, Text, StyleSheet, FlatList, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";
import CurrentUserCircle from "./CurrentUserCircle";
import SportTag from "./SportTag";

const userInfo = ({ navigation, userData }) => {
    return (
        <View style={styles.userInfos}>
            <CurrentUserCircle/>
            {userData && (
                <View style={styles.userInfosText}>
                    <View style={styles.userInfosStats}>
                        <View style={styles.userInfosStat}>
                            {userData.sessions && (<Text style={styles.userInfosTextBold}>{userData.sessions.length}</Text>)}
                            <Text style={styles.userInfosTextDesc}>séances</Text>
                        </View>
                        <View style={styles.userInfosStat}>
                            {userData.user  && (<Text style={styles.userInfosTextBold}>{userData.user[0].followers ? userData.user[0].followers.length : 0}</Text>)}
                            <Text style={styles.userInfosTextDesc}>Abonnés</Text>
                        </View>
                        <View style={styles.userInfosStat}>
                            {userData.user && (<Text
                                style={styles.userInfosTextBold}>{userData.user[0].following ? userData.user[0].following.length : 0}</Text>)}
                            <Text style={styles.userInfosTextDesc}>Partners</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    userInfos:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 0,
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
