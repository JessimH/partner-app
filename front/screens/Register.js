import React, {useRef, useState, useEffect} from "react";
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
    Plateform, Dimensions, TouchableOpacityComponent
} from "react-native";
import colors from '../assets/css_variables/Colors';
import LogoPartner from '../assets/images/logoPartner.svg';
import {Ionicons} from "@expo/vector-icons";
import ToggleSwitch from 'toggle-switch-react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import {Modalize} from 'react-native-modalize';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import LottieView from 'lottie-react-native';
import {dispatch} from "../context/store";

const baseUrl = 'https://partnerapi.herokuapp.com/api';

const win = Dimensions.get('window');

const Register = ({navigation}) => {
    useEffect(() => {
        console.log("register page");
        function makeGetRequest(path) {
            axios.get(path).then(
                (response) => {
                    let result = response.data;
                    setSportSelect(result);
                    setDataFromGet(JSON.stringify(result));
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        makeGetRequest(`${baseUrl}/sports`);
    }, [])

    const [showPass, setShowPass] = useState(false);

    const [dataFromGet, setDataFromGet] = useState(null);


    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const addPicModal = useRef(null);
    const openAddPic = () => {
        addPicModal.current?.open();
    };
    const closeAddPic = () => {
        addPicModal.current?.close();
    };


    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    }

    const [openSelect, setOpenSelect] = useState(false);
    const [sportSelect, setSportSelect] = useState([]);
    // if(dataFromGet) {
    //     setSportSelect(dataFromGet)
    // }

    DropDownPicker.addTranslation("FR", {
        PLACEHOLDER: "Selectionne le ou les sports que tu préfère !",
        SEARCH_PLACEHOLDER: "Chercher un sport....",
        SELECTED_ITEMS_COUNT_TEXT: "{count} sports sélectionné(s)", // See below for advanced options
        NOTHING_TO_SHOW: "Aucun résultat",
    });

    // Set as default
    DropDownPicker.setLanguage("FR");

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
            base64: true,
        });

        console.log(result);

        if (!result.cancelled) {
            setProfilPic(result.uri);
            setProfilPicBase64(result.base64);
        }
        closeAddPic();
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
            base64: true,
        });

        console.log(result);

        if (!result.cancelled) {
            setProfilPic(result.uri);
            setProfilPicBase64(result.base64);
        }
        closeAddPic();
    }

    /*REGISTER*/
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [valueSelect, setValueSelect] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [profilPic, setProfilPic] = useState(null);
    const [profilPicBase64, setProfilPicBase64] = useState(null);

    const form =  {
        email,
        username,
        password,
        'sports': valueSelect,
        'is_pro': isChecked,
        'picture': profilPicBase64
    }

    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    const handleRegister = async (event) => {
        setIsLoading(true);
        console.log(form);
        try {
            const response = await axios.post(`${baseUrl}/auth/register`, form, config)
            if (response.status === 201) {
                setIsLoading(false);
                setUsername(null);
                setPassword(null);
                setProfilPic(null);
                setProfilPicBase64(null);
                setIsChecked(false);
                console.log(JSON.stringify(response.data))
                let user = response.data;
                dispatch('currentUser', user);
                dispatch('userAuth', true);
            } else {
                throw new Error("Bad status");
            }
        } catch (error) {
            alert('Bad status');
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.center} >
            <View style={styles.loginContainer}>
                <LogoPartner style={styles.logo} width={190} height={100}/>
                <View stylle={styles.loginForm}>
                    <View style={styles.addPic}>
                        <TouchableOpacity
                            onPress={openAddPic}>
                            <View style={styles.UserPic_container}>
                                {profilPic
                                    ? (<Image
                                            style={styles.userCircle_pic}
                                            source={{uri: profilPic}}
                                        />
                                    )
                                    : (
                                        <Image
                                            style={styles.userCircle_pic}
                                            source={{uri: 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png'}}
                                        />
                                    )
                                }
                                {!profilPic && (<Ionicons style={styles.addIcon} name="add-outline" size={40}/>)}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputLogin}>
                        <TextInput
                            /*autoFocus={true}*/
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Nom d'utilisateur *"
                            onChangeText={(text) => setUsername(text)}
                            editable={!isLoading}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Email *"
                            onChangeText={(text) => setEmail(text)}
                            editable={!isLoading}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            secureTextEntry={showPass}
                            placeholder="Mot de passe *"
                            onChangeText={(text) => setPassword(text)}
                            maxLength={12}
                            editable={!isLoading}
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity
                            style={styles.showPass}
                            onPress={toggleShowPass}>
                            <Ionicons style={styles.iconEye} name={showPass ? "eye-outline" : "eye-off-outline"}
                                      size={20}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.inputLabel}>Choisis les sports que tu pratiques ! 💪</Text>
                    <DropDownPicker
                        style={{
                            backgroundColor: "#FAFAFA",
                            borderColor: '#f0f0f0',
                            marginBottom: 16
                        }}
                        placeholderStyle={{
                            color: 'rgba(60, 60, 67, 0.6)',
                        }}
                        dropDownContainerStyle={{
                            borderColor: '#f0f0f0',
                        }}
                        searchContainerStyle={{
                            borderBottomColor: "#dfdfdf",
                            borderColor: '#dfdfdf',
                            borderWidth: 0,
                        }}
                        searchTextInputStyle={{
                            borderWidth: 0,
                        }}
                        badgeStyle={{
                            backgroundColor: '#dffef6',
                            padding: 6,
                            paddingHorizontal: 8,
                            borderRadius: 20,
                        }}
                        dropDownDirection="AUTO"
                        multiple={true}
                        searchable={true}
                        min={0}
                        max={null}
                        autoScroll={true}
                        open={openSelect}
                        value={valueSelect}
                        items={sportSelect}
                        setOpen={setOpenSelect}
                        setValue={setValueSelect}
                        setItems={setSportSelect}
                        mode="BADGE"
                        showBadgeDot={false}
                        extendableBadgeContainer={true}
                    />
                    <ToggleSwitch
                        style={styles.toggleSwitch}
                        isOn={isChecked}
                        onColor={colors.primary}
                        offColor={colors.secondary}
                        label="Êtes-vous coach ou professionnel ? 🔥"
                        size="medium"
                        labelStyle={{color: "black", fontWeight: "800"}}
                        onToggle={toggleSwitch}
                    />
                    <TouchableOpacity style={styles.loginBtn}
                                      onPress={handleRegister}>
                        {!isLoading && (<Text style={styles.loginBtnTxt}>S'inscrire</Text>)}
                        {isLoading && (<LottieView
                            autoPlay
                            loop={true}
                            style={styles.LottieUserLocation}
                            source={require('../assets/lotties/loading.json')}
                        />)}
                    </TouchableOpacity>
                    <View style={styles.registerLink}>
                        <Text style={styles.registerLink_txt}>
                            Déjà inscrit ?
                        </Text>
                        <TouchableOpacity style={styles.registerBtn}
                                          onPress={() => navigation.navigate("StackLogin")}>
                            <Text style={styles.registerBtnTxt}>Connectez-vous !</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/*ADD PIC MODAL*/}
            <Modalize
                ref={addPicModal}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
                snapPoint={300}
                adjustToContentHeight={true}
                onScrollBeginDrag={false}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeAddPic}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <View
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.addPostModal}>
                    <TouchableOpacity style={styles.btnPicContainer}
                                      onPress={pickImageFromLibrary}>
                        <Ionicons style={styles.btnPic} name="image-outline" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPicContainer}
                                      onPress={pickImageFromCamera}>
                        <Ionicons style={styles.btnPic} name="camera-outline" size={30}/>
                    </TouchableOpacity>
                </View>
            </Modalize>
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
    inputLabel: {
        marginTop: 8,
        marginBottom: 8,
        fontWeight: "800"
    },
    toggleSwitch: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: -8,
        marginTop: 8,
        marginBottom: 16,
    },
    UserPic_container: {
        padding: 3,
        borderRadius: 50,
        marginBottom: 16,
        position: "relative",
    },
    userCircle_pic: {
        height: 84,
        width: 84,
        borderRadius: 50,
    },
    addPic: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    addIcon: {
        position: "absolute",
        top: 26,
        left: 26,
        color: "white",
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
        height: 200,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btnPicContainer: {
        marginTop: -16,
        width: '30%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.translu,
        borderRadius: 8,

    },
    btnPic: {
        color: colors.primary,
    },
    showPass: {
        position: "absolute",
        right: 16,
    },
    iconEye: {
        color: colors.gray,
    }
});

export default Register;
