import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from 'axios';
import { Button, Icon, Tab } from "react-native-elements";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Colors, Endpoints } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const SignupView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "phone", title: "Phone" },
    { key: "email", title: "Email" },
  ]);

  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
      <View style={styles.container}>
        <Text style={styles.title}>Enter phone number or email address</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        tabBarPosition="top"
        renderScene={SceneMap({
          phone: _phoneRender,
          email: _emailRender,
        })}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.BLACK }}
            labelStyle={styles.tabLabel}
            style={styles.tabBar}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={{ width: w }}
        style={styles.tabView}

      />
    </>
  );
};

const _phoneRender = () => {
  const navigation = useNavigation();
  const onNext = () => navigation.navigate("Otp");

  return (
    <View style={styles.tabRender}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType="telephoneNumber"
            placeholder="Phone number"
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={onNext} type="solid" title="Next" />
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.text, { marginTop: 30 }]}>OR</Text>
            <View style={styles.fbkLoginContainer}>
              <Button
                icon={
                  <Icon
                    name="logo-facebook"
                    type="ionicon"
                    size={22}
                    color={Colors.DEFAULT_BLUE}
                  />
                }
                type="clear"
                title=" Continue with Facebook"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const _emailRender = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = async (email) => {
    setIsLoading(true);
    await axios.post(Endpoints.REGISTER, { email })
      .then((res) => {
        setIsLoading(false);
        navigation.navigate("Otp", { email: res.data.email });
      })
      .catch((err) => setIsLoading(false))
  };

  return (
    <View style={styles.tabRender}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            textContentType="emailAddress"
            placeholder="Email"
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={() => register(email)} loading={isLoading ? true : false} type="solid" title="Next" />
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.text, { marginTop: 30 }]}>OR</Text>
            <View style={styles.fbkLoginContainer}>
              <Button
                icon={
                  <Icon
                    name="logo-facebook"
                    type="ionicon"
                    size={22}
                    color={Colors.DEFAULT_BLUE}
                  />
                }
                type="clear"
                title=" Continue with Facebook"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingTop: 30,
  },
  tabView: {
    paddingHorizontal: 25,
    backgroundColor: Colors.WHITE,
  },
  tabRender: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  tabBar: {
    backgroundColor: Colors.WHITE,
    paddingTop: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.DEFAULT_LIGHT,
    elevation: 0
  },
  tabLabel: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "500",
    color: Colors.BLACK
  },
  text: {
    color: Colors.BLACK,
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    color: Colors.BLACK,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 50,
  },
  inputContainer: {
    backgroundColor: Colors.INPUT_BACKGROUND,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    marginStart: 10,
    color: Colors.BLACK,
  },
  btnContainer: {
    marginTop: 20,
  },
  fbkLoginContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
