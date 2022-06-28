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
import LottieView from 'lottie-react-native';
import axios from 'axios';

const baseUrl = 'https://partnerapi.herokuapp.com/api';
const win = Dimensions.get('window');

const Login = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = async (event) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, {
                username,
                password,
            });
            if (response.status === 200) {
                setIsLoading(false);
                setUsername('');
                setPassword('');
                console.log(JSON.stringify(response.data))
                return response.data
            } else {
                throw new Error("Bad status");
            }
        } catch (error) {
            console.log(error);
            alert("Mauvaise Url", error);
            setIsLoading(false);
        }
    };

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
                            editable={!isLoading}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => setUsername(text)}
                        />
                    </View>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Mot de passe *"
                            axLength={10}
                            editable={!isLoading}
                            secureTextEntry={showPass}
                            onChangeText={(text) => setPassword(text)}
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity
                            style={styles.showPass}
                            onPress={toggleShowPass}>
                            <Ionicons style={styles.iconEye} name={showPass ? "eye-outline" : "eye-off-outline"} size={20}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={onSubmitLogin}>
                        {!isLoading && (<Text style={styles.loginBtnTxt}>Connexion</Text>)}
                        {isLoading && (<LottieView
                            autoPlay
                            loop={true}
                            style={styles.LottieUserLocation}
                            source={require('../assets/lotties/loading.json')}
                        />)}
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
        position: "relative",
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
    },
    LottieUserLocation: {
        position: "absolute",
        width: 90,
        height: 90,
    },

});

export default Login;
