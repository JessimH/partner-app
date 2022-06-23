// ./screens/Contact.js

import React, { useState, useEffect, createRef, useRef } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Plateform
} from "react-native";
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

import SportCircle from "../components/Global/SportCircle";
import CurrentUserCircleMap from "../components/Map/CurrentUserCircleMap";
import MapView from 'react-native-maps'
import { Modalize } from 'react-native-modalize';

import LogoPartner from '../assets/images/logoPartner.svg';
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/css_variables/Colors";

const Map = ({ navigation }) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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

    let text = 'Waiting..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location.coords.latitude);
        // console.log(location.coords)
    }

    /*GO SOMEWHERE ON MAP*/
    const mapRef = createRef();

    const goToMyLocation = async () => {
        mapRef.current.animateCamera({
            center: {
                "latitude": location.coords.latitude,
                "longitude": location.coords.longitude
            }
        });
    }

    /*EXEMPLE*/

    const goToMarkerLocation = async () => {
        let markerLongitude = location.coords.longitude;
        let markerLatitude = location.coords.latitude + 0.005;

        mapRef.current.animateCamera({
            center: {
                "latitude": markerLatitude,
                "longitude": markerLongitude
            }
        });
    }

    // ADD SCEANCE MODAL FUCTIONS
    const modalizeRef = useRef(null);

    const openAddSeance = () => {
        modalizeRef.current?.open();
    };

    const closeAddSeance = () => {
        modalizeRef.current?.close();
    };

    const addSession = (event) => {
        let coordinate = event.nativeEvent.coordinate
        console.log(coordinate)
        openAddSeance();
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
                onPress={openAddSeance}
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
                snapPoint={600}
                adjustToContentHeight={true}
                onScrollBeginDrag={false}
                HeaderComponent={
                    <View>
                        <TouchableOpacity
                            onPress={closeAddSeance}
                            style={styles.modalHeader}>
                            <View style={styles.barClose}></View>
                        </TouchableOpacity>
                    </View>
                }
                withHandle={false}>
                <View
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.addSceancetModal}>
                    <Text>Formulaire Add Sceance</Text>
                    <TextInput placeholder="Username" style={styles.textInput} />
                </View>
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
        justifyContent: 'center',
    },
    barClose: {
        width: '50%',
        height: 5,
        borderRadius: 50,
        backgroundColor: colors.noSto,
    },
    addSceancetModal: {
        width: '100%',
        height: 600,
        paddingTop: 10,
        paddingHorizontal: 24,
    },
});

export default Map;
