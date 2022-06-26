import React, { useState, useEffect, createRef, useRef } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Plateform,
    Button
} from "react-native";
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

import SportCircle from "../components/Global/SportCircle";
import CurrentUserCircleMap from "../components/Map/CurrentUserCircleMap";
import MapView from 'react-native-maps'
import { Modalize } from 'react-native-modalize';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/css_variables/Colors";

const win = Dimensions.get('window');

const Map = ({ navigation }) => {
    const mapRef = createRef();
    const modalizeRef = useRef(null);
    const modalizeRefAddBtn = useRef(null);

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [openSelect, setOpenSelect] = useState(false);
    const [valueSelect, setValueSelect] = useState([]);
    const [sportSelect, setSportSelect] = useState([
        {label: '⚽️ Football', value: 'Football'},
        {label: '🏀 Basket', value: 'Basket'},
        {label: '🎾 Tennis', value: 'tennis'},
        {label: '🥊 Boxe', value: 'Boxe'},
        {label: '🏃🏻‍♂️ Running', value: 'Running'},
    ]);
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'L\'adresse est en cours de calcul...'
    );

    useEffect(() => {
        CheckIfLocationEnabled();
        GetAddSessionLocation();
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
                accuracy: Location.Accuracy.Balanced,
                timeInterval: 5
            });
            setLocation(location);
        })();
    }, []);



    let coords = null
    let addSessionlat = null
    let addSessionlong = null

    let text = 'Waiting..';

    function showDatePicker() {
        setDatePicker(!datePicker);
    };

    function showTimePicker() {
        setTimePicker(!timePicker);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
        console.log(value);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
        console.log(value);
    };

    DropDownPicker.addTranslation("FR", {
        PLACEHOLDER: "Quel sport souhaitez-vous pratiquer ?",
        SEARCH_PLACEHOLDER: "Chercher un sport....",
        SELECTED_ITEMS_COUNT_TEXT: "{count} sports sélectionné(s)", // See below for advanced options
        NOTHING_TO_SHOW: "Aucun résultat",
    });

    // Set as default
    DropDownPicker.setLanguage("FR");


    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location.coords.latitude);
        // console.log(location.coords)
    }

    const goToMyLocation = async () => {
        mapRef.current.animateCamera({
            center: {
                "latitude": location.coords.latitude,
                "longitude": location.coords.longitude
            },
            altitude: 1500
        });
    }

    const goToMarkerLocation = async () => {
        let markerLongitude = location.coords.longitude;
        let markerLatitude = location.coords.latitude + 0.005;

        mapRef.current.animateCamera({
            center: {
                "latitude": markerLatitude,
                "longitude": markerLongitude
            },
            altitude: 1500
        });
    }

    // ADD SCEANCE MODAL FUCTIONS

    const openAddSeance = () => {
        modalizeRef.current?.open();
    };

    const closeAddSeance = () => {
        modalizeRef.current?.close();
    };

    const openAddSeanceBtn = () => {
        modalizeRefAddBtn.current?.open();
    };

    const closeAddSeanceBtn = () => {
        modalizeRefAddBtn.current?.close();
    };


    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    const GetAddSessionLocation = async (coords) => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });
            console.log('response:', response);
            for (let item of response) {
                let address = `${item.name}, ${item.postalCode}, ${item.city}`;

                setDisplayCurrentAddress(address);
            }
        }
        console.log('GetAddSessionLocation:', coords);
    };

    const addSession = (event) => {
        let coords = event.nativeEvent.coordinate
        addSessionlat = coords.latitude
        addSessionlong = coords.longitude
        CheckIfLocationEnabled();
        GetAddSessionLocation(coords);
        console.log(coords)
        openAddSeance();
    }

    const sendSessionToDb = () => {
        console.log("Post sent to DB");
        Toast.show({
            type: 'success',
            text1: 'Votre séance a bien été ajoutée ! 🎉',
        });
        closeAddSeance()
        setTimePicker(false);
        setDatePicker(false);
        setDate(new Date());
        setTime(new Date(Date.now()));
    }

    return (
        <SafeAreaView style={styles.center}>
            {location
                ? (
                    <View style={StyleSheet.absoluteFillObject}>
                        <MapView
                            ref={mapRef}
                            style={StyleSheet.absoluteFillObject}
                            // showsUserLocation={true}
                            initialRegion={{
                                "latitude": location.coords.latitude,
                                "longitude": location.coords.longitude,
                                "latitudeDelta": 0.03,
                                "longitudeDelta": 0.03,
                            }}
                            onLongPress={ (event) => {addSession(event)} }>
                            <Marker
                                key={1}
                                style={{ zIndex: 4 }}
                                onPress={goToMarkerLocation}
                                coordinate={{
                                    latitude: location.coords.latitude + 0.005,
                                    longitude: location.coords.longitude,
                                }}
                            >
                                <SportCircle sportType={'⚽️'}/>
                            </Marker>

                            <Marker
                                key={1}
                                style={{ zIndex: 4 }}
                                onPress={goToMarkerLocation}
                                coordinate={{
                                    latitude: location.coords.latitude + 0.009,
                                    longitude: location.coords.longitude + 0.003,
                                }}
                            >
                                <SportCircle sportType={'🏀'}/>
                            </Marker>

                            <Marker
                                key={1}
                                style={{ zIndex: 4 }}
                                onPress={goToMarkerLocation}
                                coordinate={{
                                    latitude: location.coords.latitude - 0.009,
                                    longitude: location.coords.longitude - 0.003,
                                }}
                            >
                                <SportCircle sportType={'🎾'}/>
                            </Marker>

                            {/*USER MARKER*/}
                            <Marker
                                key={2}
                                style={{ zIndex: 3 }}
                                onPress={goToMyLocation}
                                coordinate={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}
                            >
                                <CurrentUserCircleMap />
                            </Marker>
                        </MapView>
                    </View>
                )
                :(
                    <View style={StyleSheet.absoluteFillObject}>
                        <MapView style={StyleSheet.absoluteFillObject}></MapView>
                    </View>
                )
            }
            {/* MAPS BUTTON AND OVERLAY */}
            <TouchableOpacity
                onPress={() => navigation.navigate("SearchTraining")}
                style={styles.btnSearch}
            >
                <Ionicons style={styles.messageIcon} name="search" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={openAddSeanceBtn}
                style={styles.createSceance}
            >
                <Ionicons style={styles.messageIcon} name="add" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnOnMap}
                onPress={goToMyLocation}
            >
                <Ionicons style={styles.centerOnUserIcon} name="compass-outline" size={30} />
            </TouchableOpacity>

            {/* MODALE */}
            <Modalize
                ref={modalizeRef}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                snapPoint={900}
                onScrollBeginDrag={false}
                modalHeight={win.height * 0.85}
                keyboardAvoidingBehavior={null}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeAddSeance}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                FooterComponent={
                    <View>
                        <TouchableOpacity style={styles.confirmPost}
                                          onPress={sendSessionToDb}>
                            <Text style={styles.confirmText}>
                                Publier la séance
                            </Text>
                            <Ionicons style={styles.arrowIcon} name="arrow-forward" size={25}/>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <ScrollView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.addSceanceModal}>
                    <Text style={styles.formTitle}>Créez votre propre séance !</Text>
                    <Text style={styles.inputLabel}>Choisis ton sport ! 🔥</Text>
                    <DropDownPicker
                        style={{
                            backgroundColor: "#FAFAFA",
                            borderColor: '#f0f0f0',
                            marginBottom: 16,
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
                        dropDownDirection="AUTO"
                        multiple={false}
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
                    <Text style={styles.inputLabel}>Où ? 📍</Text>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder={displayCurrentAddress}
                            value={displayCurrentAddress === 'L\'adresse est en cours de calcul...' ?  null :  displayCurrentAddress }
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Quand ? 🤔</Text>
                    <View style={styles.inputLogin}>
                        {!datePicker && (
                            <View>
                                <TouchableOpacity onPress={showDatePicker} >
                                    {date ? (<Text style={styles.text}>{date.toLocaleDateString()}</Text>) : 'Choisir une date'}
                                </TouchableOpacity>
                            </View>
                        )}
                        {datePicker && (
                            <View>
                                <TouchableOpacity onPress={showDatePicker} >
                                    <Text style={styles.text}>Choisir une date</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    {datePicker && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onDateSelected}
                            style={styles.datePicker}
                        />
                    )}

                    <Text style={styles.inputLabel}>À quelle heure ? ⌚️</Text>
                    <View style={styles.inputLogin}>
                        {!timePicker && (
                            <View>
                                <TouchableOpacity onPress={showTimePicker} >
                                    {time ? (<Text style={styles.text}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>) : 'Choisir une heure de départ'}
                                </TouchableOpacity>
                            </View>
                        )}
                        {timePicker && (
                            <View>
                                <TouchableOpacity onPress={showTimePicker} >
                                    <Text style={styles.text}>Choisir une heure de départ</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    {timePicker && (
                        <DateTimePicker
                            value={time}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onTimeSelected}
                            style={styles.datePicker}
                        />
                    )}
                    <Text style={styles.inputLabel}>Combien de personne maximum ? 🤝</Text>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Le monde chico 🌍"
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </ScrollView>
            </Modalize>
            <Modalize
                ref={modalizeRefAddBtn}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                onScrollBeginDrag={false}
                withHandle={false}
                snapPoint={900}
                modalHeight={win.height * 0.85}
                keyboardAvoidingBehavior={null}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeAddSeanceBtn}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }x
                FooterComponent={
                    <View>
                        <TouchableOpacity style={styles.confirmPost}
                                          onPress={sendSessionToDb}>
                            <Text style={styles.confirmText}>
                                Publier la séance
                            </Text>
                            <Ionicons style={styles.arrowIcon} name="arrow-forward" size={25}/>
                        </TouchableOpacity>
                    </View>
                }
                >
                <ScrollView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.addSceanceModal}>
                    <Text style={styles.formTitle}>Créez votre propre séance !</Text>
                    <Text style={styles.inputLabel}>Choisis ton sport ! 🔥</Text>
                    <DropDownPicker
                        style={{
                            backgroundColor: "#FAFAFA",
                            borderColor: '#f0f0f0',
                            marginBottom: 16,
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
                        dropDownDirection="AUTO"
                        multiple={false}
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
                    <Text style={styles.inputLabel}>Où ? 📍</Text>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Entrez le lieu de rendez-vous 📍"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Quand ? 🤔</Text>
                    <View style={styles.inputLogin}>
                        {!datePicker && (
                            <View>
                                <TouchableOpacity onPress={showDatePicker} >
                                    {date ? (<Text style={styles.text}>{date.toLocaleDateString()}</Text>) : 'Choisir une date'}
                                </TouchableOpacity>
                            </View>
                        )}
                        {datePicker && (
                            <View>
                                <TouchableOpacity onPress={showDatePicker} >
                                    <Text style={styles.text}>Choisir une date</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    {datePicker && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onDateSelected}
                            style={styles.datePicker}
                        />
                    )}

                    <Text style={styles.inputLabel}>À quelle heure ? ⌚️</Text>
                    <View style={styles.inputLogin}>
                        {!timePicker && (
                            <View>
                                <TouchableOpacity onPress={showTimePicker} >
                                    {time ? (<Text style={styles.text}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>) : 'Choisir une heure de départ'}
                                </TouchableOpacity>
                            </View>
                        )}
                        {timePicker && (
                            <View>
                                <TouchableOpacity onPress={showTimePicker} >
                                    <Text style={styles.text}>Choisir une heure de départ</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    {timePicker && (
                        <DateTimePicker
                            value={time}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onTimeSelected}
                            style={styles.datePicker}
                        />
                    )}
                    <Text style={styles.inputLabel}>Combien de personne maximum ? 🤝</Text>
                    <View style={styles.inputLogin}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='rgba(60, 60, 67, 0.6)'
                            placeholder="Le monde chico 🌍"
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </ScrollView>
            </Modalize>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        position: "relative",
        flex: 1,
        paddingTop: Plateform === 'ios' ? 0: 40,
    },
    headerMap: {
        paddingHorizontal: 24,
        // paddingBottom: 16,
        // backgroundColor: 'white',
        // height: 100,
        // position: 'absolute',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    btnSearch: {
        zIndex: 6,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: colors.background,
        bottom: 92,
        right: 24,
        height: 40,
        width: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 3,
    },
    createSceance:{
        zIndex: 6,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: colors.background,
        bottom: 158,
        right: 24,
        height: 40,
        width: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 3,
    },
    btnOnMap: {
        zIndex: 6,
        borderRadius: 10,
        height: 40,
        width: 40,
        paddingLeft: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: colors.background,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 3,
    },
    centerOnUserIcon: {
        color: colors.primary
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
        justifyContent: 'center'
    },
    barClose: {
        width: '50%',
        height: 5,
        borderRadius: 50,
        backgroundColor: colors.noSto,
    },
    addSceanceModal: {
        width: '100%',
        height: 700,
        paddingTop: 10,
        paddingBottom: 100,
        paddingHorizontal: 24,
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
    },
    inputLabel: {
        marginTop: 8,
        fontWeight: "800",
        marginBottom: 8,
    },
    formTitle:{
        width: '100%',
        textAlign: 'center',
        fontWeight: "800",
        fontSize: 18,
        marginBottom: 16,
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

    text: {
        paddingLeft: 16,
        fontSize: 14,
        textAlign: 'center'
    },
    textChoosDate:{
        paddingLeft: 16,
        color: 'rgba(60, 60, 67, 0.6)',
    },
    // Style for iOS ONLY...
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
        marginBottom: -16,
        marginTop: -24,
    },

});

export default Map;
