import React, {useRef, useState} from "react";
import { View, Button, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/css_variables/Colors";
import Post from "./Post";

const Feed = ({ navigation, openSendPost, profile, openActionModal }) => {
    const [perfTab, setperfTab] = useState(false);

    function changeFakeTab() {
        setperfTab(!perfTab);
    }
    let posts = true

    return (
        <View style={styles.feed}>
            {profile && (
                <View style={styles.postNbr}>
                    <TouchableOpacity style={[styles.fakeTab, perfTab ? null : styles.currentTab]} onPress={changeFakeTab}>
                        <Text style={[styles.postNbrTxt, perfTab ? null : styles.currentTxt]}>37 posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.fakeTab, perfTab ? styles.currentTab : null]} onPress={changeFakeTab}>
                        <Text style={[styles.postNbrTxt, perfTab ? styles.currentTxt : null]}>Séances</Text>
                    </TouchableOpacity>
                </View>
            )}
            { (!perfTab && posts) ?(
                <View>
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        sportPost={'🏀'}
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        imagePost={'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e5508157-d8af-4b69-8de3-d776ff6ed4ac/trouver-votre-chaussure-de-running.jpg'}
                        textPost="Blablabla"
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        textPost="Le sport va chercher la peur pour la dominer,
                        la fatigue pour en triompher, la difficulté pour la vaincre"
                        switchHidden={true}
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        imagePost={'https://pbs.twimg.com/media/FOcWFTtWYAI11PO?format=jpg&name=large'}
                        textPost="Le sport va chercher la peur pour la dominer,
                        la fatigue pour en triompher, la difficulté pour la vaincre"
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        sportPost={'🎾'}
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        imagePost={'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/06/media_144026/nos-terrains-de-foot-en-salle-preferes-en-region-parisienne%2CM347005.jpg?itok=Jv0Gx8EW'}
                        textPost="Le sport va chercher la peur pour la dominer,
                        la fatigue pour en triompher, la difficulté pour la vaincre"
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        textPost="Le sport va chercher la peur pour la dominer,
                        la fatigue pour en triompher, la difficulté pour la vaincre"
                    />
                    <Post
                        openSendPost={openSendPost}
                        openActionModal={openActionModal}
                        textPost="Le sport va chercher la peur pour la dominer,
                        la fatigue pour en triompher, la difficulté pour la vaincre"
                    />
                </View>

            )
            :(
                <View style={styles.noPost}>
                    {profile ? (
                        <Text style={styles.noPostTxt}>Aucun post n'a été publié pour le moment, vous pouvez en publier a partir d'ici : </Text>
                    ): (
                        <Text style={styles.noPostTxt}>Vous ne suivez encore aucun Partner, vous pouvez en trouver ici !</Text>
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
        borderColor: 'black',
    },
    postNbrTxt:{
        fontSize: 16,
        color: colors.gray,
        fontWeight: 'bold',
    },
    currentTxt:{
        color: 'black',
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
