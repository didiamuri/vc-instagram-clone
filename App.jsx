import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import axios from 'axios';
import { LoginView, OtpView, RegisterWizardView, SignupView } from "./src/views";
import { HomeTabs } from "./src/components/HomeTabs";
import { AuthContext } from "./src/contexts/context";
import { Colors, Endpoints } from "./src/constants";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const authContext = useMemo(() => ({

    login: async (email, password) => {
      setIsLoading(true);
      await axios.post(Endpoints.LOGIN_URL, { email, password })
        .then((res) => {
          setToken(res.data.token);
          setIsLoading(false);
        })
        .catch((err) => setIsLoading(false));
    },
    signup: async (values) => {
      setIsLoading(true);
      await axios.put(Endpoints.SIGNUP, values)
        .then((res) => {
          setToken(res.data.token);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    },
    logOut: () => {
      setToken(null);
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color={Colors.DEFAULT_BLUE} />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {token ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginView} options={{ headerShown: false, headerTitle: "Log In" }} />
            <Stack.Screen name="Signup" component={SignupView} options={{ headerShown: true, headerTitle: "", }} />
              <Stack.Screen name="Otp" component={OtpView} options={{ headerShown: true, headerTitle: "Enter confirmation code", title: "" }} />
              <Stack.Screen name="Register" component={RegisterWizardView} options={{ headerShown: true, headerTitle: "Register" }} />
          </Stack.Navigator>
        )}

      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
