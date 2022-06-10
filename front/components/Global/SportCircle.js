import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";

const SportCircle = ({ navigation, sportType }) => {
    return (
        <View style={styles.SportCircle_container}>
            {sportType && (<View style={styles.SportCircle}>
                <Text style={styles.SportCircle_type}>{sportType}</Text>
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    SportCircle_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SportCircle: {
        height: 64,
        width: 64,
        backgroundColor: 'white',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.35)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 3,
        marginBottom: 8,
    },
    SportCircle_type: {
        fontSize: 32,
        textAlign: 'center',
    },
    SportCircle_username: {
        textAlign: 'center',
        fontSize: 16,
    }
});

export default SportCircle;