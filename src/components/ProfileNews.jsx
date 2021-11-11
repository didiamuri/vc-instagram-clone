import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { Colors } from "../constants";

const ProfileNews = () => {
  const _renderItem = () => {
    return (
      <View style={styles.container}>
        <Avatar
          source={require("../assets/img/post1.jpg")}
          rounded
          size={65}
          avatarStyle={styles.image}
        />
        <Text style={styles.text}>A la une</Text>
      </View>
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ paddingLeft: 10 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => _renderItem())}
    </ScrollView>
  );
};

export default ProfileNews;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginRight: 5,
    alignItems: "center",
  },
  image: {
    borderWidth: 4,
    borderColor: Colors.GRAY_LIGHT,
  },
  text: {
    fontSize: 13,
    marginTop: 2,
    fontWeight: "500"
  },
});
