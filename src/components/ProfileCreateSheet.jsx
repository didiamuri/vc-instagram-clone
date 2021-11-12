import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, ListItem } from "react-native-elements";

const ProfileCreateSheet = () => {
  const items = [
    {
      name: "Post",
      icon: "apps-outline",
    },
    {
      name: "Story",
      icon: "add-circle-outline",
    },
    {
      name: "Story Highlight",
      icon: "heart-circle-outline",
    },
    {
      name: "Live",
      icon: "radio-outline",
    },
    {
      name: "Guide",
      icon: "book-outline",
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

export default ProfileCreateSheet;

const styles = StyleSheet.create({});
