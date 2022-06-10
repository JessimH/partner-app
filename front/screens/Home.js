import React, { useRef } from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from "react-native";
import colors from '../assets/css_variables/Colors';
import { Ionicons } from "@expo/vector-icons";
import LogoPartner from '../assets/images/logoPartner.svg';

// Modals
import { Modalize } from 'react-native-modalize';
import UserRow from "../components/Global/UserRow";
import { ScrollView } from "react-native-gesture-handler";
import Feed from "../components/Global/Feed";
import SendToUser from "../components/Global/SendToUser";

const Home = ({ navigation }) => {

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


    return (
        <SafeAreaView style={styles.center}>
            <View style={styles.homeHeader}>
                <LogoPartner width={190} height={40} />
                <View style={styles.headerBtns}>
                    <TouchableOpacity
                        onPress={openAddPost}
                        style={styles.createPost}
                    >
                        <Ionicons style={styles.messageIcon} name="add-outline" size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Messages")}
                    >
                        <Ionicons style={styles.messageIcon} name="chatbubbles" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <UserRow />
                <Feed openSendPost={openSendPost}/>
            </ScrollView>


            {/* MODALES  */}

            {/*ADD POST*/}
            <Modalize
                ref={addPostModal}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                snapPoint={300}
                adjustToContentHeight={true}
                onScrollBeginDrag={false}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeAddPost}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <View
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.addPostModal}>
                    <Text>Formulaire Add Post</Text>
                    <TextInput placeholder="Username" style={styles.textInput} />
                </View>
            </Modalize>

            {/*SEND POST*/}
            <Modalize
                ref={sendPostModal}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
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
        height: 300,
        paddingTop: 10,
        paddingHorizontal: 24,
    },
    sendPostModal:{
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
    }
});

export default Home;