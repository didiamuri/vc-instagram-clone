import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "../constants";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>didiamuri</Text>
        <Icon name="chevron-down" type="ionicon" size={20} />
      </View>
      <View style={styles.menu}>
        <Icon
          name="plus-square"
          type="feather"
          size={25}
          containerStyle={{ marginRight: 10 }}
        />
        <Icon
          name="menu"
          type="feather"
          size={25}
          containerStyle={{ marginLeft: 10 }}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 8,
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
