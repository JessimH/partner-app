// ./screens/About.js
import React, {useRef} from "react";
import {View, StyleSheet, Text, SafeAreaView, Plateform, TouchableOpacity, Dimensions} from "react-native";

import colors from "../../assets/css_variables/Colors";
import {Ionicons} from "@expo/vector-icons";


const win = Dimensions.get('window');

const ScreenHeader = ({goBack, profileScreen,menu, messageScreen,noGoBack, title, userNote, openUserSettings}) => {

    return (
        <View style={styles.headerComponent}>
            {!noGoBack && (
                <TouchableOpacity
                    onPress={() => goBack()}
                >
                    <Ionicons style={styles.backIcon} name="chevron-back-outline" size={30}/>
                </TouchableOpacity>
            )}
            <Text style={styles.headerComponentTxt}>{title}</Text>
            {profileScreen && (
                <View>
                    {userNote && (
                        <View style={styles.partnerNote}>
                            <Text style={styles.noteTxt}>{userNote}</Text>
                            <Ionicons style={styles.starIcon} name="star" size={15}/>
                        </View>
                    )}
                </View>
            )}
            {menu && (
                <TouchableOpacity
                    style={styles.headerComponentBtnRight}
                    onPress={openUserSettings}
                >
                    <Ionicons style={styles.backIcon} name="menu" size={25}/>
                </TouchableOpacity>
            )}
            {messageScreen && (
                <TouchableOpacity
                    style={styles.headerComponentBtnRight}
                >
                    <Ionicons style={[styles.backIcon, {color: colors.primary}]} name="add-outline" size={30}/>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        paddingTop: Plateform === 'ios' ? 0 : 40,
        flex: 1,
        alignItems: "center",
        textAlign: "center",
    },
    post: {
        width: "100%",
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    headerComponent: {
        width: win.width,
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
        position: "relative",
    },
    backIcon: {
        marginLeft: 20,
    },
    starIcon: {
        marginLeft: 4,
        color: colors.primary,
    },
    headerComponentTxt: {
        textAlign: "center",
        marginLeft: 16,
        fontSize: 19,
        fontWeight: "700",
    },
    headerComponentBtnRight: {
        position: "absolute",
        right: 24,
    },
    partnerNote: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 16,
    },
    noteTxt: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.primary,
    }
});

export default ScreenHeader;
