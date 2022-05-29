import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import colors from "../../assets/css_variables/Colors";

const StoryPreview = ({ navigation }) => {
    return (
        <View style={styles.StoryPreview_container}>
            <View style={styles.prev_info}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.prev_username}>Wendell.Fay95</Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.prev_timestamp}>Paris, France - il y a 10h </Text>
            </View>
            <Image
                style={styles.preview_pic}
                source={{ uri: 'https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    StoryPreview_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 240,
        width: 162,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    prev_info: {
        position: 'absolute',
        zIndex: 2,
        top: 12,
        left: 12
    },
    prev_username: {
        fontWeight: 'bold',
        width: 135,
        color: 'white',
    },
    prev_timestamp: {
        color: 'white',
        fontSize: 11
    },
    preview_pic: {
        height: '100%',
        width: '100%',
    }
});

export default StoryPreview;