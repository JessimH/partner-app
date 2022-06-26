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
import {Touchable} from "react-native-web";

const win = Dimensions.get('window');

const Home = ({navigation}) => {
    const homeRef = useRef(null);
    useScrollToTop(homeRef);

    // ADD POST MODAL FUCTIONS
    const sendPostModal = useRef(null);
    const actionPostModal = useRef(null);

    const openSendPost = () => {
        sendPostModal.current?.open();
    };

    const closeSendPost = () => {
        sendPostModal.current?.close();
    };

    const openActionModal = () => {
        actionPostModal.current?.open();
    };
    const closeActionModal = () => {
        actionPostModal.current?.close();
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
                <PostForm />
                <Feed openSendPost={openSendPost}
                      openAction odal={openActionModal}
                      profile={false}
                />
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
                    <Text style={styles.formTitle}>Avec qui partager ceci ? 🤔</Text>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                    <SendToUser/>
                </ScrollView>
            </Modalize>

            <Modalize
                ref={actionPostModal}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
                snapPoint={600}
                adjustToContentHeight={true}
                onScrollBeginDrag={false}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeActionModal}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <ScrollView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.sendPostModal}>
                    {/*IF USER POST */}
                    <TouchableOpacity style={styles.actionsBtnOnPost}>
                        <Text style={styles.textProblem}>Supprimer le post</Text>
                    </TouchableOpacity>

                    {/*IF NOT*/}
                    <TouchableOpacity style={styles.actionsBtnOnPost}>
                        <Text style={styles.textProblem}>Signaler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionsBtnOnPost}>
                        <Text>Se désabonner</Text>
                    </TouchableOpacity>

                    {/*IF USER POST & USER IS PRO*/}
                    <TouchableOpacity style={styles.actionsBtnOnPost}>
                        <Text>Ne montrer ceci qu'à mes abonnés</Text>
                    </TouchableOpacity>
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
    formTitle:{
        width: '100%',
        textAlign: 'center',
        fontWeight: "800",
        fontSize: 18,
        marginBottom: 16,
    },
    btnActionModal:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionsBtnOnPost:{
        backgroundColor: colors.noSto,
        width: '100%',
        height: 40,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    textProblem:{
        color: "red",
    }

});

export default Home;