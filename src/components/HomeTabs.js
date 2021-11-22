import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivityView from "../views/ActivityView";
import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import AddPostView from "../views/addPosts/AddPostView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, Images } from "../constants";
import HomeViewCustomHeader from "./HomeViewCustomHeader";
import SearchViewCustomHeader from "./SearchViewCustomHeader";
import Svg, { Path } from "react-native-svg";
import ProfileNav from "./ProfileNav";
import AddPostViewCustomHeader from "./AddPostViewCustomHeader";

const Tab = createBottomTabNavigator();
const handleNavigationOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;
    if (route.name === "home") {
      if (focused) {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Accueil"
            color="#262626"
            fill="currentColor"
            role="img"
            viewBox="0 0 48 48"
            height={Images.TAB_ICON_SIZE}
            width={Images.TAB_ICON_SIZE}
          >
            <Path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></Path>
          </Svg>
        );
      } else {
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Accueil"
            class="_8-yf5 "
            color="#262626"
            fill="currentColor"
            role="img"
            viewBox="0 0 48 48"
            height={Images.TAB_ICON_SIZE}
            width={Images.TAB_ICON_SIZE}
          >
            <Path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></Path>
          </Svg>
        );
      }
    } else if (route.name === "search") {
      iconName = focused ? "search" : "search-outline";
    } else if (route.name === "activity") {
      iconName = focused ? "heart" : "heart-outline";
    } else if (route.name === "addPost") {
      iconName = focused ? "add-circle" : "add-circle-outline";
    } else if (route.name === "profile") {
      iconName = focused ? "person-circle" : "person-circle-outline";
    }
    return (
      <Ionicons name={iconName} size={Images.TAB_ICON_SIZE} color={color} />
    );
  },
  tabBarActiveTintColor: Colors.TAB_ICON_COLOR_ACTIVE,
  tabBarInactiveTintColor: Colors.TAB_ICON_COLOR,
  tabBarShowLabel: false,
});
export const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={handleNavigationOptions}>
      <Tab.Screen
        name="home"
        component={HomeView}
        options={{
          header: (props) => <HomeViewCustomHeader {...props} />,
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="search"
        component={SearchView}
        options={{ header: (props) => <SearchViewCustomHeader {...props} /> }}
      ></Tab.Screen>

      <Tab.Screen
        name="addPost"
        component={AddPostView}
        options={{ header: (props) => <AddPostViewCustomHeader {...props} />,tabBarLabel: "Add Post", headerTitle: "Add Post" }}
      ></Tab.Screen>
      <Tab.Screen
        name="activity"
        component={ActivityView}
        options={{ tabBarLabel: "Favorite", headerTitle: "Activity" }}
      ></Tab.Screen>
      <Tab.Screen
        name="profile"
        component={ProfileNav}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}; 
