import React, {useState, useEffect} from "react";
import {
    View,
    Button,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TouchableWithoutFeedback
} from "react-native";
import colors from "../../assets/css_variables/Colors";
import SportTag from "./SportTag";
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";

const win = Dimensions.get('window');

const UserBio = ({ navigation, userData, isCurrentUser, isPro}) => {
    // const currentUser =  useSelector(s => s.currentUser);

    const [following, setFollowing] = useState(false);
    const [userSports, setUserSports] = useState([]);

    const onPressFollow = () => {
        setFollowing(!following);
    }

    return (
        <View style={styles.userBio}>
            <Text style={styles.userBioText}>Petite bio de l'utilisateur</Text>
            <View style={styles.userInfosSports}>
                <SportTag  sportTexte={"🏀 Basketball"}/>
                <SportTag  sportTexte={"🏃🏻‍♂️ Running"}/>
                <SportTag  sportTexte={"⚽️ Football"}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userBio:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    userBioText:{
        textAlign: 'center',
        marginVertical: 8,
    },
    userInfosSports:{
        width: win.width,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 8,
    },
});

export default UserBio;