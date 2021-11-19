import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import { LoginView, OtpView, RegisterWizardView, SignupView } from "./src/views";
import { HomeTabs } from "./src/components/HomeTabs";
import { AuthContext } from "./src/contexts/context";
import { Colors, Endpoints } from "./src/constants";
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const authContext = useMemo(() => ({

    login: async (email, password) => {
      setIsLoading(true);
      await fetch(Endpoints.LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify({ email, password })
      }).then((response) => response.json())
        .then((res) => {
          setIsLoading(false);
          switch (res.statusCode) {
            case 200:
              storeToken(res.token);
              setToken(res.token);
              fetchUserData(res.token);
            case 400:
              showMessage({
                message: "Warning",
                description: res.message,
                type: "warning",
                hideStatusBar: true,
                duration: 5000
              });
            default:
              return;
          }
        })
        .catch((e) => {
          setIsLoading(false)
          showMessage({
            message: "Error",
            description: e.message,
            type: "danger",
            hideStatusBar: true,
            duration: 5000
          });
        });
    },
    signup: async (values) => {
      setIsLoading(true);
      await fetch(Endpoints.SIGNUP, {
        method: "POST",
        body: JSON.stringify(values)
      }).then((response) => response.json())
        .then((res) => {
          setIsLoading(false);
          switch (res.statusCode) {
            case 200:
              storeToken(res.data.token);
              setToken(res.data.token);
              fetchUserData(res.data.token);
            case 400:
              showMessage({
                message: "Warning",
                description: res.message,
                type: "warning",
                hideStatusBar: true,
                duration: 5000
              });
            default:
              return;
          }
        }).catch((e) => {
          setIsLoading(false);
          showMessage({
            message: "Error",
            description: e.message,
            type: "danger",
            hideStatusBar: true,
            duration: 5000
          });
        });
    },
    logOut: async () => {
      setToken(null);
      setIsLoading(false);
      await AsyncStorage.clear();
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      getToken();
      fetchUserData(token);
      setIsLoading(false);
    }, 1000)
  }, []);

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("@token", token);
    } catch (e) { }
  }

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')
      if (token !== null) {
        setToken(token)
      }
    } catch (e) { }
  }

  const fetchUserData = async (jwtToken) => {
    await axios.get(Endpoints.GET_PROFILE, {
      headers: { 'Authorization': 'Bearer ' + jwtToken }
    })
      .then((result) => {
        if (result.data) {
          storeUserData(result.data);
        }
      })
      .catch((e) => { });
  }

  const storeUserData = async (data) => {
    try {
      await AsyncStorage.setItem("@userData", JSON.stringify(data));
    } catch (e) { }
  }

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
      <FlashMessage position="top" />
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
