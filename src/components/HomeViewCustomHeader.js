import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors, Images } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeViewCustomHeader = (props) => {
  return (
    <>
      <View style={styles.customHeaderContainer}>
        <Image  style={styles.image} source={require('../assets/img/logo-black.png')} />
        <Ionicons size={27} color={Colors.BLACK} name="send-outline" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  customHeaderContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingStart: 15,
    paddingEnd: 18,
    paddingBottom: 8,
  },
  image: {
    width: 110,
    height: 35,
  },
});

export default HomeViewCustomHeader;
