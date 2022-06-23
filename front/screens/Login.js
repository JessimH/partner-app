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
    Plateform, Dimensions
} from "react-native";
import colors from '../assets/css_variables/Colors';
import LogoPartner from '../assets/images/logoPartner.svg';
import {Ionicons} from "@expo/vector-icons";

const win = Dimensions.get('window');

const Login = ({navigation}) => {

    const [showPass, setShowPass] = useState(false);

    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.center}>
            <View style={styles.loginContainer}>
                <LogoPartner style={styles.logo} width={190} height={100}/>
                <View stylle={styles.loginForm}>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            /*autoFocus={true}*/
                            keyboardType="default"
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Username *"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Mot de passe *"
                            secureTextEntry={showPass}
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity
                            style={styles.showPass}
                            onPress={toggleShowPass}>
                            <Ionicons style={styles.iconEye} name={showPass ? "eye-outline" : "eye-off-outline"} size={20}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnTxt}>Connexion</Text>
                    </TouchableOpacity>
                    <View style={styles.registerLink}>
                        <Text style={styles.registerLink_txt}>
                            déjà inscrit ?
                        </Text>
                        <TouchableOpacity style={styles.registerBtn}
                                          onPress={() => navigation.navigate("StackRegister")}>
                            <Text style={styles.registerBtnTxt}>Inscrivez-vous !</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    center: {
        paddingTop: Plateform === 'ios' ? 0 : 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: colors.background,
    },
    loginContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    logo: {
        alignSelf: "center",
    },
    loginForm: {
        marginTop: 42,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    inputLogin: {
        marginBottom: 16,
        justifySelf: "center",
        height: 44,
        backgroundColor: "#FAFAFA",
        borderColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        paddingLeft: 16,
        height: "100%",
        width: "100%",
    },
    loginBtn: {
        marginTop: 16,
        width: "100%",
        backgroundColor: colors.primary,
        height: 44,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtnTxt: {
        color: colors.background,
        fontWeight: "bold",
        fontSize: 16,
    },
    registerBtn: {
        marginLeft: 8,
    },
    registerBtnTxt: {
        color: colors.primary,
    },
    registerLink: {
        width: "100%",
        justifyContent: "center",
        marginTop: 64,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    registerLink_txt: {
        color: colors.gray,
        marginRight: 8,
    },
    showPass:{
        position: "absolute",
        right: 16,
    },
    iconEye:{
        color: colors.gray,
    }

});

export default Login;
