import React, {useRef, useState} from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput} from "react-native";
import colors from "../../assets/css_variables/Colors";
import { Ionicons } from "@expo/vector-icons";
import {ScrollView} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const win = Dimensions.get('window');

const PostForm = ({toggleAddPost}) => {
    const [numberC, setNumberC] = useState(0)

    const [postPic, setPostPic] = useState(null);

    const deletePostPic = () => {
        setPostPic(null);
    }

    const pickImageFromCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Attention, vous n'avez pas autorisé l'accès à votre appareil photo !");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setPostPic(result.uri);
        }
    }


    const pickImageFromLibrary = async () => {
        // Ask the user for the permission to access the media library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Attention, vous n'avez pas autorisé l'accès à votre bibliothèque de photos !");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setPostPic(result.uri);
        }
    }

    const sendPostToDb = () => {
        console.log("Post sent to DB");
        setPostPic(null)
        setNumberC(0)
    }

    return (
        <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.addPostModal}>
            <View>
                <View  style={styles.addPostForm}>
                    <View style={styles.UserPic_container}>
                        <Image
                            style={styles.userCircle_pic}
                            source={{uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}
                        />

                    </View>
                    <TextInput placeholder="Que voulez-vous partager ?"
                               style={styles.textInput}
                               multiline={true}
                               maxLength={140}
                               onChangeText={newText => setNumberC(newText.length)}/>
                    <Text style={styles.textCounter}>
                        <Text style={styles.textCounterCurrent}>{numberC}</Text> /
                        140</Text>
                </View>
            </View>
            <View style={styles.imgPreviewContainer}>
                {postPic && (<View style={styles.postPic_container}>
                    <Image
                        style={styles.post_pic}
                        source={{uri: postPic}}
                    />
                    <TouchableOpacity style={styles.btnDeletePic}
                                      onPress={deletePostPic}>
                        <Ionicons style={styles.btnDeleteIcon} name="close" size={20}/>
                    </TouchableOpacity>
                </View>)
                }
            </View>
            <View style={styles.addPicContainer}>
                <TouchableOpacity style={styles.btnPicContainer}
                                  onPress={pickImageFromLibrary}>
                    <Ionicons style={styles.btnPic} name="image-outline" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPicContainer}
                                  onPress={pickImageFromCamera}>
                    <Ionicons style={styles.btnPic} name="camera-outline" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmPost}
                                  onPress={sendPostToDb}>
                    <Text style={styles.confirmText}>
                        Publier
                    </Text>
                    <Ionicons style={styles.arrowIcon} name="arrow-forward" size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    addPostModal: {
        width: '100%',
        maxHeight: 600,
        paddingTop: 10,
        paddingHorizontal: 16,
        position: 'relative',
    },
    addPostForm: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },
    UserPic_container: {
        borderRadius: 50,
        width: 52
    },
    userCircle_pic: {
        height: 52,
        width: 52,
        borderRadius: 50,
    },
    textInput: {
        marginLeft: 8,
        paddingBottom: 24,
        fontSize: 18,
        width: '83%',
        fontWeight: '500',
        borderRadius: 8,
        padding: 4,
    },
    textCounter: {
        position: 'absolute',
        bottom: 4,
        right: 16,
        fontWeight: 'bold',
    },
    textCounterCurrent: {
        color: colors.secondary,
    },
    imgPreviewContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    postPic_container: {
        borderWidth: 1,
        borderColor: '#f0f0f0',
        marginTop: 12,
        borderRadius: 8,
        width: 300,
        overflow: "hidden",
        objectFit: "contain",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    post_pic: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    btnDeletePic: {
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: colors.noSto,
        padding: 2,
        borderRadius: "50%",
    },
    btnDeleteIcon: {
        color: 'white',
    },
    addPicContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
        width: '100%',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    btnPicContainer: {
        width: 50,
        height: 50,
        marginLeft: 16,
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.translu,
        borderRadius: 8
    },
    btnPic: {
        color: colors.primary,
    },
    confirmPost: {
        display: 'flex',
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        alignSelf: 'center',
        marginBottom: 16,
        marginLeft: 16,

    },
    confirmText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    arrowIcon:{
        color: 'white',
        marginLeft: 8,
    },
});

export default PostForm;
