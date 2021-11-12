import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import { Colors } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const ProfileInfos = ({
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
    <>
    <View style={{ paddingHorizontal: 20 }}>
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
    </>
  );
};

export default ProfileInfos;

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingBottom: 0,
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
});
