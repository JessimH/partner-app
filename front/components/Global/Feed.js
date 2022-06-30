import React, {useRef, useState} from "react";
import { View, Button, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/css_variables/Colors";
import Post from "./Post";
import {Ionicons} from "@expo/vector-icons";

const Feed = ({ navigation, openSendPost, profile, openActionModal, posts }) => {
    const [listTab, setListTab] = useState(false);

    function changeFakeTab() {
        setListTab(!listTab);
    }
    let sessions = false

    return (
        <View style={styles.feed}>
            {profile && (
                <View style={styles.postNbr}>
                    <TouchableOpacity style={[styles.fakeTab, listTab ? null : styles.currentTab]} onPress={changeFakeTab}>
                        <Ionicons style={[styles.postNbrTxt, listTab ? null : styles.currentTxt]} name="list-outline" size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.fakeTab, listTab ? styles.currentTab : null]} onPress={changeFakeTab}>
                        <Ionicons style={[styles.postNbrTxt, listTab ? styles.currentTxt : null]} name="barbell-outline" size={40}/>
                    </TouchableOpacity>
                </View>
            )}
            { (!listTab && posts) ?(
                <View>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            textPost={post.description}
                            imagePost={post.medias}
                            postInfos={post}
                            openSendPost={openSendPost}
                            openActionModal={openActionModal}
                            navigation={navigation}
                        />
                    ))}
                </View>

            )
            :(
                <View style={styles.noPost}>
                    {profile ? (
                        <Text style={styles.noPostTxt}>Il n'y a rien a voir ici, retourne a l'entrainement ! 🫵</Text>
                    ): (
                        <Text style={styles.noPostTxt}>Vous ne suivez encore aucun Partner, vous pouvez en trouver dans l'onglet EXPLORER !</Text>
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    feed: {
        width: "100%",
        paddingBottom: 16,
        display: "flex",
        flexDirection: "column",
    },
    postNbr:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    fakeTab:{
        width: "50%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        paddingVertical: 12,
        borderColor: '#f0f0f0',
    },
    currentTab:{
        borderColor: colors.primary,
    },
    postNbrTxt:{
        fontSize: 25,
        color: colors.gray,
        fontWeight: 'bold',
    },
    currentTxt:{
        color: colors.primary,
    },
    noPost:{
        width: "100%",
        display: "flex",
        paddingVertical: 24,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    noPostTxt:{
        fontSize: 16,
        fontWeight: '700',
        textAlign: "center",
        maxWidth: '70%',
    }
});

export default Feed;
