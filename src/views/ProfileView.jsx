import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import { Colors, Images } from "../constants"

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const ProfileView = () => {
    return (
        <View style={styles.container}>
            <ProfileHeader
                username="didiamuri"
                name='Didierson'
                posts='123'
                folowers='1.5M'
                folowings="211"
                avatar={Images.DEFAULT_AVATAR}
            />
        </View>
    )
}

export default ProfileView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        width: w,
        height: h,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 20,
    }
})
