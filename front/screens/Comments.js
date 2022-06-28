// ./screens/About.js
import React, {useRef, useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Plateform,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    Image,
    TextInput
} from "react-native";
import Post from "../components/Global/Post";
import {Modalize} from "react-native-modalize";
import {ScrollView} from "react-native-gesture-handler";
import SendToUser from "../components/Global/SendToUser";
import colors from "../assets/css_variables/Colors";
import {Ionicons} from "@expo/vector-icons";
import ScreenHeader from "../components/Global/ScreenHeader";
import {useScrollToTop} from "@react-navigation/native";
import Comment from "../components/Global/Comment";


const win = Dimensions.get('window');

const Comments = ({navigation: {goBack}}) => {
    const commentsRef = useRef(null);
    const [numberC, setNumberC] = useState(0)
    useScrollToTop(commentsRef);

    const sendComToDb = () => {
        console.log("Post sent to DB");
        setNumberC(0)
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.center}>
            <ScreenHeader goBack={goBack}
                          profileScreen={false}
                          noGoBack={false}
                          messageScreen={false}
                          title="Commentaires"
                          userNote="4"
            />
            <ScrollView
                  ref={commentsRef}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}>
                <View style={styles.commentForm}>
                    <View  style={styles.addPostForm}>
                        <View style={styles.UserPic_container}>
                            <Image
                                style={styles.userCircle_pic}
                                source={{uri: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}
                            />

                        </View>
                        <TextInput placeholder="Ecrivez votre commentaire..."
                                   style={styles.textInput}
                                   multiline={true}
                                   maxLength={140}
                                   onChangeText={newText => setNumberC(newText.length)}/>
                        <Text style={styles.textCounter}>
                            <Text style={styles.textCounterCurrent}>{numberC}</Text> /
                            140</Text>
                    </View>
                    <View style={styles.addPicContainer}>
                        <TouchableOpacity style={styles.confirmPost}
                                          onPress={sendComToDb}>
                            <Text style={styles.confirmText}>
                                Commenter
                            </Text>
                            <Ionicons style={styles.arrowIcon} name="arrow-forward" size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    center: {
        paddingTop: Plateform === 'ios' ? 0 : 40,
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: colors.background,
        position: "relative",
    },
    commentForm: {
        width: win.width,
        paddingTop: 16,
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    addPostForm: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: 24
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
    addPicContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
        paddingHorizontal: 24,
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

export default Comments;
