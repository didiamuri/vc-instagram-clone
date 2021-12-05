import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import AddPostStep2CustomHeader from "../../components/AddPostStep2CustomHeader";
import AddPostViewCustomHeader from "../../components/AddPostViewCustomHeader";
import AddPostView from "./AddPostView";
import Step2 from "./Step2"
const Stack = createNativeStackNavigator();

export const AddPostNav = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="AddPostView" component={AddPostView} options={{ header: (props) => <AddPostViewCustomHeader {...props} />}} />
      <Stack.Screen name="Step2" component={Step2} options={{ header: (props) => <AddPostStep2CustomHeader {...props} />}} />
    </Stack.Navigator>
  );
};

export default AddPostNav;
