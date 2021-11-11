import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../constants";

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
        tabBarIcon: ({ focused, color }) => {
          let tabIcon;
          if (route.name === "Posts") {
            tabIcon = focused ? (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                class="_8-yf5 "
                color="#262626"
                fill="currentColor"
                role="img"
                viewBox="0 0 48 48"
              >
                <Path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                ></Path>
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                class="_8-yf5 "
                color="#8e8e8e"
                fill="currentColor"
                role="img"
                viewBox="0 0 48 48"
              >
                <Path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                />
              </Svg>
            );
          } else if (route.name === "Videos") {
            tabIcon = focused ? (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                class="_8-yf5 "
                color="#262626"
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
              >
                <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z" />
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                class="_8-yf5 "
                color="#8e8e8e"
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
              >
                <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z" />
              </Svg>
            );
          } else if (route.name === "Tags") {
            tabIcon = focused ? (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                class="_8-yf5 "
                color="#262626"
                fill="currentColor"
                role="img"
                viewBox="0 0 48 48"
              >
                <Path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z" />
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                class="_8-yf5 "
                color="#8e8e8e"
                fill="currentColor"
                role="img"
                viewBox="0 0 48 48"
              >
                <Path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></Path>
              </Svg>
            );
          }
          return tabIcon;
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
