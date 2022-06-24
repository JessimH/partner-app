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
import PostForm from "../components/Global/PostForm";
import { useScrollToTop } from '@react-navigation/native';

const win = Dimensions.get('window');

const Home = ({navigation}) => {
    const homeRef = useRef(null);
    useScrollToTop(homeRef);

    // ADD POST MODAL FUCTIONS
    const sendPostModal = useRef(null);

    const openSendPost = () => {
        sendPostModal.current?.open();
    };

    const closeSendPost = () => {
        sendPostModal.current?.close();
    };

    return (
        <SafeAreaView style={styles.center}>
            <View style={styles.homeHeader}>
                <LogoPartner width={190} height={40}/>
                <View style={styles.headerBtns}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Messages")}
                    >
                        <Ionicons style={styles.messageIcon} name="chatbubbles" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                ref={homeRef}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                {/*<UserRow openSendPost={openSendPost}/>*/}
                <PostForm />
                <Feed openSendPost={openSendPost}/>
            </ScrollView>

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

});

export default Home;