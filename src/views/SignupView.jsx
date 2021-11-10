import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, Icon, Tab } from "react-native-elements";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Colors } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const SignupView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "phone", title: "Phone" },
    { key: "email", title: "Email" },
  ]);

  const navigation = useNavigation();
  const onBack = () => navigation.navigate("Login");
  const onNext = () => navigation.navigate("Otp");

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={onBack}>
            <Icon
              name="chevron-back"
              type="ionicon"
              size={35}
              color={Colors.WHITE}
            />
          </Pressable>
        </View>
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
            indicatorStyle={{ backgroundColor: "#dee5e4" }}
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
  const onNext = () => navigation.navigate("Otp");

  return (
    <View style={styles.tabRender}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType="emailAddress"
            placeholder="Email"
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
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

export default SignupView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BLACK,
    paddingTop: h / 8,
  },
  header: {
    position: "absolute",
    top: 50,
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    width: "100%",
    zIndex: 9999,
  },
  tabView: {
    paddingHorizontal: 25,
    backgroundColor: Colors.BLACK,
  },
  tabRender: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  tabBar: {
    backgroundColor: Colors.BLACK,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.CUSTOM_LIGHT,
  },
  tabLabel: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    color: Colors.DEFAULT_LIGHT,
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    color: Colors.WHITE,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 50,
  },
  inputContainer: {
    backgroundColor: Colors.INPUT_BACKGROUND,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    marginStart: 10,
    color: Colors.DEFAULT_LIGHT,
  },
  btnContainer: {
    marginTop: 20,
  },
  fbkLoginContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
