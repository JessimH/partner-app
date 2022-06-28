// ./screens/About.js

import React, {useRef} from "react";
import {View, StyleSheet, Text, SafeAreaView, Plateform, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import UserRow from "../components/Global/UserRow";
import Feed from "../components/Global/Feed";
import UserInfo from "../components/Global/UserInfo";
import colors from "../assets/css_variables/Colors";
import UserBio from "../components/Global/UserBio";
import {Modalize} from "react-native-modalize";
import SendToUser from "../components/Global/SendToUser";
import {useScrollToTop} from "@react-navigation/native";
import ScreenHeader from "../components/Global/ScreenHeader";
import {dispatch} from "../context/store";

const UserProfil = ({navigation}) => {
    const usersRef = useRef(null);
    useScrollToTop(usersRef);
    // ADD POST MODAL FUCTIONS
    const sendPostModal = useRef(null);
    const userSettingsModal = useRef(null);
    const actionPostModal = useRef(null);

    const openSendPost = () => {
        sendPostModal.current?.open();
    };

    const closeSendPost = () => {
        sendPostModal.current?.close();
    };

    const openUserSettings = () => {
        userSettingsModal.current?.open();
    };

    const closeUserSettings = () => {
        userSettingsModal.current?.close();
    };

    const openActionModal = () => {
        actionPostModal.current?.open();
    };
    const closeActionModal = () => {
        actionPostModal.current?.close();
    };

    const disconnectUser = () => {
        dispatch('currentUser', null);
        dispatch('userAuth', null);
        console.log('disconnectUser');
    }

    return (
        <SafeAreaView style={styles.center}>
            <ScreenHeader profileScreen={true}
                          noGoBack={true}
                          menu={true}
                          title="Username"
                          userNote="4"
                          openUserSettings={openUserSettings}
            />
            <ScrollView
                style={styles.scrollView}
                ref={usersRef}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <UserInfo isCurentUser={true} />
                <UserBio rBio isCurentUser={true} />

                <Feed profile={true}
                      openSendPost={openSendPost}
                      openActionModal={openActionModal}
                      navigation={navigation}
                />
            </ScrollView>

            {/*disconnect & Settings*/}
            <Modalize
                ref={userSettingsModal}
                modalStyle={styles.modal}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
                snapPoint={600}
                adjustToContentHeight={true}
                onScrollBeginDrag={false}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeUserSettings}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <ScrollView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.sendPostModal}>

                    <TouchableOpacity style={styles.actionsBtnOnPost}
                                      onPress={() => navigation.navigate("UpdateProfile")}>
                        <Text>Modifier mon profil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionsBtnOnPost}
                                      onPress={disconnectUser}>
                        <Text style={styles.textProblem}>Déconnexion</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Modalize>

            {/*SEND POST*/}
            <Modalize
                ref={sendPostModal}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
                modalStyle={styles.modal}
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
                modalStyle={styles.modal}
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
        paddingTop: Plateform === 'ios' ? 0: 40,
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: colors.background,
    },
    scrollView: {
        paddingTop: 16,
    },
    modal:{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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

export default UserProfil;
