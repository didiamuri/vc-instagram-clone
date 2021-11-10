import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BirthdayView,
  LoginView,
  OtpView,
  ProfileView,
  SignupView,
} from "./src/views";
import { HomeTabs } from "./src/components/HomeTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={SignupView} />
        <Stack.Screen name="Otp" component={OtpView} />
        <Stack.Screen name="Username" component={OtpView} />
        <Stack.Screen name="Birthday" component={BirthdayView} />
        <Stack.Screen name="Profile" component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
