import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProfileView } from "../views";
import SettingView from "../views/settings/SettingView";
import ProfileHeader from "./ProfileHeader";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="profile1"
        component={ProfileView}
        options={{
          header: (props) => <ProfileHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="settings"
        component={SettingView}
        options={{
          headerShown: true,
          tabBarLabel: "Settings",
          headerTitle: "Settings",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({});
