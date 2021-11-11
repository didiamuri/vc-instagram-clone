import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import ProfileHeader from '../components/ProfileHeader';
import ProfileNews from '../components/ProfileNews';
import ProfileTab from '../components/ProfileTab';
import { Colors, Images } from "../constants"

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const ProfileView = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="default" translucent />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProfileHeader
                    username="didiamuri"
                    name='Didierson'
                    posts='123'
                    folowers='1.5M'
                    folowings="211"
                    avatar={Images.DEFAULT_AVATAR}
                    statut="Entrepreneur"
                    bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                />
                <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
                    <Button
                        title="Edit Profile"
                        type="outline"
                        buttonStyle={styles.buttonStyle}
                    />
                    <View style={styles.btnContainer}>
                        <Button
                            title="Add Tools"
                            type="outline"
                            buttonStyle={[styles.buttonStyle, { width: w / 3.6 }]}
                        />
                        <Button
                            title="Insights"
                            type="outline"
                            buttonStyle={[styles.buttonStyle, { width: w / 3.6 }]}
                        />
                        <Button
                            title="Add Shop"
                            type="outline"
                            buttonStyle={[styles.buttonStyle, { width: w / 3.6 }]}
                        />
                    </View>
                </View>
                <ProfileNews />
                <ProfileTab />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: w,
        height: h,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 20,
        marginTop: 60
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    buttonStyle: {
        borderColor: Colors.GRAY_LIGHT,
        borderWidth: 1,
    }
})
