import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { Colors } from "../constants";

const ProfileHeader = ({
  name,
  statut,
  bio,
  username,
  avatar,
  posts,
  folowers,
  folowings,
}) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{username}</Text>
          <Icon name="chevron-down" type="ionicon" size={20} />
        </View>
        <View style={styles.menu}>
          <Icon name="plus-square" type="feather" size={30} />
          <Icon name="menu" type="feather" size={30} />
        </View>
      </View>
      <View>
        <ListItem
          topDivider
          bottomDivider
          containerStyle={{
            paddingHorizontal: 0,
            paddingVertical: 6,
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold", fontSize: 14 }}>
              Professional Dashboard
            </ListItem.Title>
            <ListItem.Subtitle
              style={{ fontSize: 12, color: Colors.DEFAULT_LIGHT }}
            >
              Tools and ressources just for creators.
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color={Colors.DEFAULT_LIGHT} />
        </ListItem>
      </View>
      <View style={styles.profile}>
        <View style={{ alignItems: "flex-start" }}>
          <Avatar source={avatar} rounded size={100}>
            <Avatar.Accessory />
          </Avatar>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.posts}>{posts}</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.folowers}>{folowers}</Text>
          <Text style={styles.text}>Folowers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.folowings}>{folowings}</Text>
          <Text style={styles.text}>Folowings</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.statut}>{statut}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 10,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  menu: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingBottom: 0,
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
  },
  avatar: {
    borderRadius: 100,
  },
  name: {
    paddingVertical: 5,
    fontWeight: "bold",
  },
  posts: {
    fontSize: 18,
    fontWeight: "bold",
  },
  folowers: {
    fontSize: 18,
    fontWeight: "bold",
  },
  folowings: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bioContainer: {},
  bio: {
    color: Colors.BLACK,
  },
  text: {
    color: Colors.BLACK,
  },
  statut: {
    color: Colors.CUSTOM_LIGHT,
  },
});
