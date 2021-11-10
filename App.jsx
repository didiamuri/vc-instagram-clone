import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BirthdayView, LoginView, OtpView, ProfileView, SignupView } from "./src/views";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={SignupView} />
        <Stack.Screen name="Otp" component={OtpView} />
        <Stack.Screen name="Username" component={OtpView} />
        <Stack.Screen name="Birthday" component={BirthdayView} /> */}
        <Stack.Screen name="Profile" component={ProfileView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
