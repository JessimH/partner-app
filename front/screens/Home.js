import React, {useRef, useState} from "react";
import {
    View,
    Button,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Plateform,
    Dimensions
} from "react-native";
import colors from '../assets/css_variables/Colors';
import {Ionicons} from "@expo/vector-icons";
import LogoPartner from '../assets/images/logoPartner.svg';

// Modals
import {Modalize} from 'react-native-modalize';
import UserRow from "../components/Global/UserRow";
import {ScrollView} from "react-native-gesture-handler";
import Feed from "../components/Global/Feed";
import SendToUser from "../components/Global/SendToUser";
import * as ImagePicker from "expo-image-picker";
import CurrentUserCircle from "../components/Global/CurrentUserCircle";

const win = Dimensions.get('window');

const Home = ({navigation}) => {

    // ADD POST MODAL FUCTIONS
    const addPostModal = useRef(null);
    const sendPostModal = useRef(null);

    const openAddPost = () => {
        addPostModal.current?.open();
    };

    const closeAddPost = () => {
        addPostModal.current?.close();
    };

    const openSendPost = () => {
        sendPostModal.current?.open();
    };

    const closeSendPost = () => {
        sendPostModal.current?.close();
    };

    const [numberC, setNumberC] = useState(0)

    const [postPic, setPostPic] = useState(null);

    const deletePostPic = () => {
        setPostPic(null);
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

    const sendPostToDb = () => {
        console.log("Post sent to DB");
        closeAddPost()
        setPostPic(null)
        setNumberC(0)
    }


    return (
        <SafeAreaView style={styles.center}>
            <View style={styles.homeHeader}>
                <LogoPartner width={190} height={40}/>
                <View style={styles.headerBtns}>
                    <TouchableOpacity
                        onPress={openAddPost}
                        style={styles.createPost}
                    >
                        <Ionicons style={styles.messageIcon} name="add-outline" size={23}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Messages")}
                    >
                        <Ionicons style={styles.messageIcon} name="chatbubbles" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <UserRow/>
                <Feed openSendPost={openSendPost}/>
            </ScrollView>


            {/* MODALES  */}
            {/*ADD POST*/}
            <Modalize
                ref={addPostModal}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
                snapPoint={900}
                onScrollBeginDrag={false}
                modalHeight={win.height * 0.8}
                keyboardAvoidingBehavior={null}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeAddPost}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                FooterComponent={
                    <View>
                        <TouchableOpacity style={styles.confirmPost}
                        onPress={sendPostToDb}>
                            <Text style={styles.confirmText}>
                                Publier
                            </Text>
                            <Ionicons style={styles.arrowIcon} name="arrow-forward" size={25}/>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <View
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.addPostModal}>
                    <ScrollView>
                        <View  style={styles.addPostForm}>
                            <View style={styles.UserPic_container}>
                                <Image
                                    style={styles.userCircle_pic}
                                    source={{uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}
                                />

                            </View>
                            <TextInput placeholder="Que voulez-vous partager ?"
                                       style={styles.textInput}
                                       autoFocus={true}
                                       multiline={true}
                                       maxLength={140}
                                       onChangeText={newText => setNumberC(newText.length)}/>
                            <Text style={styles.textCounter}>
                                <Text style={styles.textCounterCurrent}>{numberC}</Text> /
                                140</Text>
                        </View>
                    </ScrollView>
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
                    </View>
                </View>
            </Modalize>

            {/*SEND POST*/}
            <Modalize
                ref={sendPostModal}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
                snapPoint={600}
                adjustToContentHeight={true}
                onScrollBeginDrag={false}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeSendPost}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <ScrollView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.sendPostModal}>
                    <Text style={styles.sendModalHeader}>Partager le Post</Text>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                </ScrollView>
            </Modalize>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        paddingTop: Plateform === 'ios' ? 0 : 40,
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        backgroundColor: colors.background,
    },
    homeHeader: {
        paddingHorizontal: 24,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    headerBtns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    createPost: {
        marginRight: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.primary,
        width: 27,
        height: 27,
        padding: 2,
        paddingLeft: 1,
        paddingTop: 0,
    },
    messageIcon: {
        color: colors.primary
    },
    modalHeader: {
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barClose: {
        width: '50%',
        height: 5,
        borderRadius: 50,
        backgroundColor: colors.noSto,
    },
    addPostModal: {
        width: '100%',
        maxHeight: 600,
        paddingTop: 10,
        paddingHorizontal: 16,
        position: 'relative',
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
    sendPostModal: {
        width: '100%',
        maxHeight: 600,
        paddingBottom: 16,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'column',
    },
    sendModalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
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
        borderWidth: 1,
        borderColor: '#f0f0f0',
        borderRadius: 8,
        padding: 4,
    },
    addPostForm: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },
    addPicContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
        width: '100%',
        justifyContent: 'flex-end',
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
    imgPreviewContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    confirmPost: {
        display: 'flex',
        height: 50,
        paddingHorizontal: 24,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16,
    },
    confirmText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    arrowIcon:{
        color: 'white',
        marginLeft: 8,
    }
});

export default Home;