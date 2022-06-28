import React, {useState} from "react";
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

const win = Dimensions.get('window');

const UserBio = ({ navigation, sportTexte, isCurentUser}) => {
    const [following, setFollowing] = useState(false);

    const onPressFollow = () => {
        setFollowing(!following);
    }

    return (
        <View style={styles.userBio}>

                <View style={styles.userBioTop}>
                    <Text style={styles.userBioTopTxt}>Partner vérifié</Text>
                    {!isCurentUser && (
                        <TouchableOpacity style={following ? styles.followBtn : styles.alreadyFollowBtn} onPress={onPressFollow}>
                            {following ? (<Text  style={styles.followBtnTxt}>S'abonner</Text>) : (<Text  style={styles.alreadyFollowBtnTxt}>Abonné(e)</Text>)}
                        </TouchableOpacity>
                    )}
                </View>

            <Text style={styles.userBioText}>La boxe n’est pas qu’un sport, c’est un mode de vie.</Text>
            <View style={styles.userInfosSports}>
                <SportTag sportTexte={'🥊 Boxe'}/>
                <SportTag sportTexte={'🏀 Basket'}/>
                <SportTag sportTexte={'⚽️ Foot'}/>
                <SportTag sportTexte={'🎾 Tennis'}/>
                <SportTag sportTexte={'🏋️‍ Muscu'}/>
            </View>

            <TouchableOpacity style={styles.proBtn}>
                <Ionicons style={styles.backIcon} name="calendar-outline" size={25}/>
                <Text style={styles.proBtnTxt}>3 Coaching prévu</Text>
                <Ionicons style={[styles.backIcon, {marginLeft: 8}]} name="arrow-forward-outline" size={25}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    userBio:{
        paddingLeft: 24,
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    followBtn:{
        paddingHorizontal: 16,
        height: 26,
        width: 120,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    alreadyFollowBtn:{
        paddingHorizontal: 16,
        height: 26,
        width: 120,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    followBtnTxt:{
        color: colors.background,
        fontWeight: '600'
    },
    alreadyFollowBtnTxt:{
        color: colors.primary,
        fontWeight: '600'
    },
    userName:{
        paddingTop: 8,
        width: '70%',
        fontWeight: 'bold',
    },
    userBioText:{
        paddingVertical: 8,
        width: '70%',
    },
    userInfosSports:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    userBioTop:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: 24,
        marginVertical: 8,
    },
    userBioTopTxt:{
        color: colors.secondary,
        fontWeight: 'bold',
    },
    proBtn :{
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon:{
        marginRight: 8,
        color: colors.secondary,
    },
    proBtnTxt:{
        color: colors.secondary,
        fontWeight: '700',
    }
});

export default UserBio;