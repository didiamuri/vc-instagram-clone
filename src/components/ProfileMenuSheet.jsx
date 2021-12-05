import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, View } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";

const h = Dimensions.get("screen").height;

const ProfileMenuSheet = ({ openMenu }) => {
  const items = [
    {
      name: "Settings",
      icon: "settings-outline",
    },
    {
      name: "Archive",
      icon: "timer-outline",
    },
    {
      name: "Your Activity",
      icon: "time-outline",
    },
    {
      name: "Insights",
      icon: "stats-chart-outline",
    },
    {
      name: "QR Code",
      icon: "qr-code-outline",
    },
    {
      name: "Saved",
      icon: "bookmark-outline",
    },
    {
      name: "Close Friends",
      icon: "list-outline",
    },
    {
      name: "Discover People",
      icon: "person-add-outline",
    },
    {
      name: "COVID-19 Information Center",
      icon: "heart-circle-outline",
    },
  ];

  const navigation = useNavigation();

  return (
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
          height: h / 1.26,
        },
      }}
    >
      <ListItem
        bottomDivider
        onPress={() => {
          openMenu.current.close();
          setTimeout(() => {
            navigation.navigate("settings");
          }, 200);
        }}
      >
        <Icon name="settings-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Settings</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="timer-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Archive</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="time-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Your Activity</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="stats-chart-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Insights</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="qr-code-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>QR Code</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="bookmark-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Saved</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="list-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Close Friends</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="person-add-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>Discover Poeple</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="heart-circle-outline" type="ionicon" size={25} />
        <ListItem.Content>
          <ListItem.Title>COVID-19 Information Center</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </RBSheet>
  );
};

export default ProfileMenuSheet;

const styles = StyleSheet.create({});
