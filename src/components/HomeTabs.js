import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ActivityView from "../views/ActivityView"
import HomeView from "../views/HomeView"
import SearchView from "../views/SearchView"
import ProfileView from "../views/ProfileView"
import AddPostView from "../views/AddPostView"
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, Images } from "../constants"

const Tab = createBottomTabNavigator();
const handleNavigationOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;
    if (route.name === "home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "search") {
      iconName = focused ? "search" : "search-outline";
    } else if (route.name === "activity") {
      iconName = focused ? "heart" : "heart-outline";
    } else if (route.name === "addPost") {
      iconName = focused ? "add-circle" : "add-circle-outline";
    } else if (route.name === "profile") {
      iconName = focused ? "person" : "person-outline";
    }
    return <Ionicons name={iconName} size={Images.TAB_ICON_SIZE} color={color} />;
  },
  tabBarActiveTintColor: Colors.TAB_ICON_COLOR_ACTIVE,
  tabBarInactiveTintColor: Colors.TAB_ICON_COLOR,
  tabBarShowLabel : false
});
export const HomeTabs = () => {
  return (
      <Tab.Navigator screenOptions={handleNavigationOptions}>
        <Tab.Screen
          name="home"
          component={HomeView}
          options={{ tabBarLabel: "Home", headerTitle: "Home" }}
        ></Tab.Screen>
        
        <Tab.Screen
          name="search"
          component={SearchView}
          options={{ tabBarLabel: "Search ", headerTitle: "Search" }}
        ></Tab.Screen>
       
        <Tab.Screen
          name="addPost"
          component={AddPostView}
          options={{ tabBarLabel: "Add Post", headerTitle: "Add Post" }}
        ></Tab.Screen>
         <Tab.Screen
          name="activity"
          component={ActivityView}
          options={{ tabBarLabel: "Favorite", headerTitle: "Favorite" }}
        ></Tab.Screen>
        <Tab.Screen
          name="profile"
          component={ProfileView}
          options={{ tabBarLabel: "Profile ", headerTitle: "Profile" }}
        ></Tab.Screen>
      </Tab.Navigator>
  );
};
