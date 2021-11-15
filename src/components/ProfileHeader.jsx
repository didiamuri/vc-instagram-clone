import React, { useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "../constants";
import ProfileCreateSheet from "./ProfileCreateSheet";
import ProfileMenuSheet from "./ProfileMenuSheet";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const ProfileHeader = () => {

  const openMenu = useRef();
  const createBnt = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>didiamuri</Text>
        <Icon name="chevron-down" type="ionicon" size={20} containerStyle={{ marginTop: 5 }} />
      </View>
      <View style={styles.menu}>
        <Icon
          onPress={() => createBnt.current.open()}
          name="plus-square"
          type="feather"
          size={30}
          containerStyle={{ marginLeft: 20 }}
        />
        <Icon
          onPress={() => openMenu.current.open()}
          name="menu"
          type="feather"
          size={30}
          containerStyle={{ marginLeft: 20 }}
        />
        <RBSheet
          ref={createBnt}
          closeOnDragDown={true}
          closeOnPressMask={true}
          animationType="fade"
          openDuration={600}
          customStyles={{
            wrapper: {
              background: "rgba(76, 175, 80, 0.9)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: "white",
              borderTopStartRadius: 12,
              borderTopEndRadius: 12,
              height: h / 2.4,
            },
          }}
        >
          <ProfileCreateSheet />
        </RBSheet>
        <RBSheet
          ref={openMenu}
          closeOnDragDown={true}
          closeOnPressMask={true}
          animationType="fade"
          openDuration={600}
          customStyles={{
            wrapper: {
              background: "rgba(76, 175, 80, 0.9)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: "white",
              borderTopStartRadius: 12,
              borderTopEndRadius: 12,
              height: h / 1.5,
            },
          }}
        >
          <ProfileMenuSheet />
        </RBSheet>
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
