import React, { useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import posts from "../utils/posts.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors, Images } from "../constants";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Post from "../components/Post";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Story />}
        data={posts}
        renderItem={({ item, index }) => <Post key={index} post={item} />}
      ></FlatList>
    </View>
  );
};

const Story = () => {
  return (
    <View style={styles.statusContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.status}>
          <Image
            style={styles.statusImage}
            source={require("../assets/img/post1.png")}
          />
          <Text style={styles.statusUsername}>Votre story</Text>
        </View>
        {Array(10)
          .fill(0)
          .map((value, index) => (
            <View key={index} style={styles.status}>
              <Image
                style={styles.statusImage}
                source={require("../assets/img/post1.png")}
              />
              <Text style={styles.statusUsername}>user{index}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  statusContainer: {
    height: 140,
    paddingStart: 10,
    paddingEnd: 20,
    paddingTop: 8,
    paddingBottom: 5,
    justifyContent: "flex-start",
    alignItems :"flex-start"
  },
  status: {
    marginEnd: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  statusImage: {
    overflow: "hidden",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: "pink",
    borderWidth: 2,
  },
  statusUsername: {
    fontSize: 13,
    color: "black",
    marginTop: 5,
  },
});

export default HomeView;
