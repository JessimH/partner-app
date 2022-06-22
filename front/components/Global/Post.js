import React, {useRef, useState} from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput} from "react-native";
import colors from "../../assets/css_variables/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import SportCircle from "./SportCircle";

const win = Dimensions.get('window');

const Post = ({openSendPost, imagePost, sportPost, textPost, switchHidden}) => {
    const navigation = useNavigation();

    const [like, setLike] = useState(false);
    const [hidden, setHidden] = useState(false);

    function LikeThisPost() {
        setLike(!like);
        console.log(like);
    }

    function HideThisPost() {
        setHidden(!hidden);
        console.log(hidden);
    }

    return (
        <View style={styles.post}>
            {/*POST INFO*/}
            <View style={styles.postInfos}>
                <View style={styles.UserPic_container}>
                    <Image
                        style={styles.userCircle_pic}
                        source={{ uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
                    />
                </View>
                <View style={styles.postInfosText}>
                    <Text style={styles.postUsername}>Username</Text>
                    <Text style={styles.postTimestamp}>Paris, France - il y a 10h </Text>
                </View>
                {hidden
                    ? (<TouchableOpacity
                        style={styles.btnSwitchHidden}
                        onPress={HideThisPost}>
                        <Ionicons  style={styles.btnIcon} name="lock-closed" color={colors.secondary} size={23} />
                    </TouchableOpacity>)
                    :(<TouchableOpacity
                        style={styles.btnSwitchHidden}
                        onPress={HideThisPost}>
                        <Ionicons  style={styles.btnIcon} name="lock-open" color={colors.primary} size={23} />
                    </TouchableOpacity>) }
            </View>

            {/*POST BODY*/}

            {/*IF IMAGE*/}
            {imagePost && (<View style={styles.postPic_container}>
                <Image
                    style={styles.post_pic}
                    source={{ uri: imagePost }}
                />
            </View>)}

            {/*IF TEXT*/}
            {textPost && (<Text style={styles.postBodyText}>
                {textPost}
            </Text>)}

            {/*IF SPORT LINK*/}
            {sportPost && (<View style={styles.postSport_container}>
                <SportCircle sportType={sportPost}/>
                <View style={styles.postSportBody}>
                    <Text style={styles.postSport_title}>
                        Je viens de créer une séance pour demain à 18h
                        rejoignez moi !</Text>
                    <TouchableOpacity style={styles.btnPostSport}>
                        <Text style={styles.btnPostSportText}>Rejoindre</Text>
                        <Ionicons style={styles.btnIcon} name="arrow-forward" color={colors.secondary} size={20} />
                    </TouchableOpacity>
                </View>
            </View>)}

            {!sportPost && (<View style={styles.postBtns}>
                <TouchableOpacity
                    style={styles.btnPost}
                    onPress={() => navigation.navigate("Comments")}>
                    <Ionicons  style={styles.btnIcon} name="chatbubble-outline" size={27} />
                    <Text  style={styles.btnText}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnPost}
                    onPress={LikeThisPost}>
                    {like ? (<Ionicons style={styles.btnIcon} name="heart-outline" size={30} />) : (<Ionicons style={styles.btnIcon} name="heart" color={colors.secondary} size={30} />)}
                    <Text style={styles.btnText}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={openSendPost}>
                    <Ionicons name="share-outline" size={26} />
                </TouchableOpacity>
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    post:{
        marginTop: 24,
        paddingHorizontal: 24,
    },
    postInfos:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    UserPic_container: {
        borderRadius: 50,
        width: 32
    },
    userCircle_pic: {
        height: 32,
        width: 32,
        borderRadius: 50,
    },
    postInfosText:{
        marginLeft: 8,
    },
    postUsername: {
        fontWeight: "bold",
        fontSize: 14,
    },
    postTimestamp:{
        color: colors.gray,
    },
    postBodyText: {
        marginTop: 12,
    },
    postPic_container: {
        marginTop: 12,
        borderRadius: 8,
        width: '100%',
        overflow: "hidden",
        objectFit: "contain",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    post_pic:{
        width: "100%",
        height: win.width,
        alignSelf: "center",
    },
    postBtns:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 12,
    },
    btnPost:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16,
        position: "relative",
    },
    btnSwitchHidden:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifySelf: "flex-end",
        position: "absolute",
        right: 0,
    },
    btnIcon:{
        marginRight: 3,
    },
    btnText:{
        fontWeight: "bold",
    },
    postSport_container: {
        marginTop: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    postSport_title:{
        maxWidth: 200,
    },
    postSportBody:{
        marginLeft: 16,
    },
    btnPostSport:{
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    btnPostSportText: {
        fontWeight: "bold",
        color: colors.secondary,
        fontSize: 14,
        marginRight: 6,
    }
});

export default Post;
