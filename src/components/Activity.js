import React from "react";
import { View, StyleSheet, Image, Text, Button, Dimensions } from "react-native";

const Activity = () => {
  return (
    <View style={styles.ActivityContainer}>
      <View style={styles.imageSection}>
        <Image
          style={styles.activityImage}
          source={require("../assets/img/post1.png")}
        />
      </View>
      <View style={styles.activityTextSection}>
        <Text>user10 Who you might know, is on Instagram</Text>
      </View>
      <Text style={styles.textButton}  >Follow </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ActivityContainer: {
    paddingStart: 10,
    paddingEnd: 20,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  imageSection: {
    height: 50,
    width: 50,
  },
  activityImage: {
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: "pink",
    borderWidth: 2,
  },
  activityTextSection: {
    flexDirection: "row",
    width: Dimensions.get('window').width-180,
    flexWrap :"wrap",
    justifyContent : "flex-start"
  },
  textButton: {
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor : "#0095F6",
    color : "white"

  },
});
export default Activity;
