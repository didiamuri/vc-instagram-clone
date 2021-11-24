import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors, Images } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/core";
import Step2 from "../views/addPosts/Step2";
const AddPostViewCustomHeader = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.customHeaderContainer}>
        <View style={styles.leftSection}>
          <Ionicons style={styles.closeIcon} size={40} name="close-outline" />
          <Text style={styles.title}>Add Post</Text>
        </View>
        <Ionicons
          onPress={()=>navigation.navigate('Step2',{...props.route.params})}
          size={35}
          name="arrow-forward-outline"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  customHeaderContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 8,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  closeIcon: {
    marginEnd: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AddPostViewCustomHeader;
