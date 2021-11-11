import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../constants";
import { Icon } from "react-native-elements";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const ProfileTab = () => {
  const Tab = createMaterialTopTabNavigator();
  const squares = [];
  const squareNumber = 20;

  for (let i = 0; i < squareNumber; i++) {
    squares.push(
      <View key={i}>
        <View
          style={{
            width: 129,
            height: 130,
            marginVertical: 0.5,
            backgroundColor: Colors.BLACK,
            opacity: 0.1,
          }}
        ></View>
      </View>
    );
  }

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: Colors.WHITE,
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 1,
            justifyContent: "space-between",
          }}
        >
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Videos = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: Colors.WHITE,
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 1,
            justifyContent: "space-between",
          }}
        >
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: Colors.WHITE,
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 1,
            justifyContent: "space-between",
          }}
        >
          {squares}
        </View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      style={{ marginTop: -50 }}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.BLACK,
          height: 1,
        },
        tabBarIcon: ({ focused, color, icon }) => {
          if (route.name === "Posts") {
            icon = focused ? "grid" : "grid-outline";
          } else if (route.name === "Videos") {
            icon = focused ? "play" : "play-outline";
          } else if (route.name === "Tags") {
            icon = focused ? "person" : "person-outline";
          }
          return <Icon name={icon} type="ionicon" color={color} size={23} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
