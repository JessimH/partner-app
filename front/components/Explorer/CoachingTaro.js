import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";
import UserCircle from "../Global/UserCircle";
import SportTag from "../Global/SportTag";
import {Ionicons} from "@expo/vector-icons";

const CoachingTaro = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.StoryPreview_container}>
            <View style={styles.UserCircle}>
                <View style={styles.UserPic_container}>
                    <Image
                        style={styles.userCircle_pic}
                        source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                    />
                </View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.userCircle_username}>Jessim</Text>
            </View>
            <View style={styles.coachingTaro_infos}>
                <View style={styles.coachingTaro_title}>
                    <Text style={styles.coachingTaro_price}>40€ / coaching</Text>
                    <View style={styles.partnerNote}>
                        <Text style={styles.noteTxt}>3</Text>
                        <Ionicons style={styles.starIcon} name="star" size={15}/>
                    </View>
                </View>
                <View style={styles.userInfosSports}>
                    <SportTag sportTexte={'🎾 Tennis'}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    StoryPreview_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        width: "100%",
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    UserCircle: {
        marginRight: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
    },
    UserPic_container: {
        borderRadius: 50,
    },
    userCircle_pic: {
        height: 48,
        width: 48,
        borderRadius: 50,
    },
    userCircle_username: {
        marginTop: 4,
        fontWeight: "700",
        width: 74,
        fontSize: 12,
        textAlign: "center",
    },
    coachingTaro_price:{
        fontSize: 16,
        fontWeight: "800",
        color: colors.black,
    },
    coachingTaro_title:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    userInfosSports:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    partnerNote: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    noteTxt: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.primary,
    },
    starIcon: {
        marginLeft: 4,
        color: colors.primary,
    },
});

export default CoachingTaro;