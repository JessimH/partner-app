// ./screens/Contact.js

import React, { useState, useEffect, createRef, useRef } from "react";
import { View, StyleSheet, Text, Dimensions, Platform, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

import SportCircle from "../components/Global/SportCircle";
import CurrentUserCircleMap from "../components/Map/CurrentUserCircleMap";
import MapView from 'react-native-maps'
import { Modalize } from 'react-native-modalize';

import LottieView from 'lottie-react-native';
import LogoPartner from '../assets/images/logoPartner.svg';
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/css_variables/Colors";

const Map = () => {

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
    let latitude = null;
    let longitude = null;

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location.coords.latitude);
        // console.log(location.coords)
    }

    const mapRef = createRef();


    const goToMyLocation = async () => {
        mapRef.current.animateCamera({
            center: {
                "latitude": location.coords.latitude,
                "longitude": location.coords.longitude
            }
        });
    }

    // ADD SCEANCE MODAL FUCTIONS
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };


    return (
        <SafeAreaView style={styles.center}>
            {location && (
                <View style={StyleSheet.absoluteFillObject}>
                    <MapView
                        ref={mapRef}
                        style={StyleSheet.absoluteFillObject}
                        // showsUserLocation={true}
                        initialRegion={{
                            "latitude": location.coords.latitude,
                            "latitudeDelta": 0.01,
                            "longitude": location.coords.longitude,
                            "longitudeDelta": 0.01,
                        }}>
                        <Marker
                            key={1}
                            style={{ zIndex: 4 }}
                            onPress={() => { console.log("🏀") }}
                            coordinate={{
                                latitude: location.coords.latitude + 0.005,
                                longitude: location.coords.longitude,
                            }}
                        >
                            <SportCircle />
                        </Marker>
                        <Marker
                            key={2}
                            style={{ zIndex: 3 }}
                            coordinate={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }}
                        >
                            {/* <LottieView
                                autoPlay
                                style={styles.LottieUserLocation}
                                source={require('../assets/lotties/userLocation.json')}
                            /> */}
                            <CurrentUserCircleMap />
                        </Marker>
                    </MapView>
                </View>
            )}
            <TouchableOpacity
                onPress={onOpen}
                style={styles.createSceance}
            >
                <View style={{
                    position: 'absolute', backgroundColor: 'white', height: 30,
                    width: 30, borderRadius: 50, top: '12%', left: '12%'
                }}></View>
                <Ionicons style={styles.messageIcon} name="add-circle" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnOnMap}
                onPress={goToMyLocation}
            >
                <View style={{
                    position: 'absolute', backgroundColor: 'white', height: 30,
                    width: 30, borderRadius: 50, top: '12%', left: '12%'
                }}></View>
                <Ionicons style={styles.centerOnUserIcon} name="navigate-circle" size={40} />
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
                            onPress={onClose}
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
    },
    btnOnMap: {
        zIndex: 6,
        borderRadius: 50,
        position: 'absolute',
        bottom: 24,
        right: 24,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 3,
    },
    LottieUserLocation: {
        position: 'absolute',
        top: -9.8,
        left: -4.6,
        width: 103,
        height: 103,
    },
    centerOnUserIcon: {
        color: colors.primary
    },
    createSceance: {
        position: 'absolute',
        bottom: 84,
        right: 24,
        borderRadius: 50,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 3,
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