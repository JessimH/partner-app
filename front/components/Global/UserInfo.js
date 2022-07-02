import React from "react";
import { View, Button, Text, StyleSheet, FlatList, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";
import CurrentUserCircle from "./CurrentUserCircle";
import SportTag from "./SportTag";
const userInfo = ({ navigation, userData }) => {
    return (
        <View style={styles.userInfos}>
            <CurrentUserCircle/>
           <View style={styles.userInfosText}>
               <Text style={styles.userInfosUsername}>Username</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userInfos:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 0,
    },
    userInfosText:{
        marginTop: 0,
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
    },
    userInfosUsername:{
        fontSize: 18,
        fontWeight: '700',
    }

});

export default userInfo;
