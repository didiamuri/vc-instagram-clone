import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";

const h = Dimensions.get("screen").height;

const ProfileCreateSheet = ({ createBnt }) => {
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
      {items.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="ionicon" size={25} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </RBSheet>
  );
};

export default ProfileCreateSheet;

const styles = StyleSheet.create({});
