import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, ListItem } from "react-native-elements";

const ProfileMenuSheet = () => {
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

  return (
    <View>
      {items.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="ionicon" size={25} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default ProfileMenuSheet;

const styles = StyleSheet.create({});
