import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../constants";
import ProfileCreateSheet from "./ProfileCreateSheet";
import ProfileMenuSheet from "./ProfileMenuSheet";

const ProfileHeader = () => {

  const createBnt = useRef();
  const openMenu = useRef();
  const [username, setUsername] = useState('');

  const getLocalData = async () => {
    try {
      const data = await AsyncStorage.getItem('@userData')
      const parsedData = JSON.parse(data);
      setUsername(parsedData.username);
    } catch (e) { }
  }

  useEffect(() => {
    getLocalData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>{username ? username : 'Profile'}</Text>
        <Icon name="chevron-down" type="ionicon" size={20} containerStyle={{ marginTop: 5 }} />
      </View>
      <View style={styles.menu}>
        <Icon
          onPress={() => createBnt.current.open()}
          name="plus-square"
          type="feather"
          size={30}
          containerStyle={{ marginLeft: 10 }}
        />
        <Icon
          onPress={() => openMenu.current.open()}
          name="menu"
          type="feather"
          size={30}
          containerStyle={{ marginLeft: 10 }}
        />
        <ProfileCreateSheet createBnt={createBnt} />
        <ProfileMenuSheet openMenu={openMenu} />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: Colors.WHITE,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  menu: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
