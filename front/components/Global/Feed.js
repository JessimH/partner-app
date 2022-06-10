import React from "react";
import { View, Button, Text, StyleSheet, FlatList, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";
import Post from "./Post";

const Feed = ({ navigation, openSendPost }) => {
    return (
        <View style={styles.feed}>
            <Post
                openSendPost={openSendPost}
                sportPost={'🏀'}
            />
            <Post
                openSendPost={openSendPost}
                imagePost={'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e5508157-d8af-4b69-8de3-d776ff6ed4ac/trouver-votre-chaussure-de-running.jpg'}
                textPost="Blablabla"
            />
            <Post
                openSendPost={openSendPost}
                textPost="Le sport va chercher la peur pour la dominer,
                la fatigue pour en triompher, la difficulté pour la vaincre"
                proHidden={true}
            />
            <Post
                openSendPost={openSendPost}
                imagePost={'https://pbs.twimg.com/media/FOcWFTtWYAI11PO?format=jpg&name=large'}
                textPost="Le sport va chercher la peur pour la dominer,
                la fatigue pour en triompher, la difficulté pour la vaincre"
            />
            <Post
                openSendPost={openSendPost}
                sportPost={'🎾'}
            />
            <Post
                openSendPost={openSendPost}
                imagePost={'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/06/media_144026/nos-terrains-de-foot-en-salle-preferes-en-region-parisienne%2CM347005.jpg?itok=Jv0Gx8EW'}
                textPost="Le sport va chercher la peur pour la dominer,
                la fatigue pour en triompher, la difficulté pour la vaincre"
            />
            <Post
                openSendPost={openSendPost}
                textPost="Le sport va chercher la peur pour la dominer,
                la fatigue pour en triompher, la difficulté pour la vaincre"
            />
            <Post
                openSendPost={openSendPost}
                textPost="Le sport va chercher la peur pour la dominer,
                la fatigue pour en triompher, la difficulté pour la vaincre"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    feed: {
        width: "100%",
        paddingBottom: 16,
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
    }
});

export default Feed;