import React from 'react';
import { StyleSheet } from 'react-native';
import ProfileInfos from '../components/ProfileInfos';
import ProfileStory from '../components/ProfileStory';
import { Colors, Images } from "../constants";
import { FlatList } from 'react-native-gesture-handler';
import ProfileTabsCustom from '../components/ProfileTabsCustom';

const data = [{ key: '1' }];

const ProfileView = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.container}
            data={data}
            renderItem={() => (
                <>
                    <ProfileInfos
                        username="didiamuri"
                        name='Didierson'
                        posts='123'
                        folowers='1.5M'
                        folowings="211"
                        avatar={Images.DEFAULT_AVATAR}
                        statut="Entrepreneur"
                        bio="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    />
                    <ProfileStory />
                    <ProfileTabsCustom />
                </>
            )}
        >
        </FlatList>
    )
}

export default ProfileView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
})
