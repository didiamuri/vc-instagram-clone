import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { Colors, Images } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const LoginView = () => {
  const navigation = useNavigation();
  const onSignUp = () => navigation.navigate("Signup");
  const onLogin = () => navigation.navigate("Signup");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <Image
        source={Images.LOGO_LIGHT}
        width="100%"
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType="emailAddress"
            placeholder="Email"
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType="password"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={styles.forgotContainer}>
          <Pressable>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </Pressable>
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={onLogin} type="solid" title="Login" />
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
      <View style={styles.footer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Pressable onPress={onSignUp}>
          <Text style={styles.linkText}> Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.BLACK,
  },
  logo: {
    width: 250,
    height: 90,
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: Colors.INPUT_BACKGROUND,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    marginStart: 20,
    marginEnd: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  formContainer: {
    marginTop: 80,
  },
  input: {
    marginStart: 10,
    color: Colors.DEFAULT_LIGHT,
  },
  btnContainer: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginEnd: 20,
    marginTop: 5,
  },
  forgotText: {
    color: Colors.DEFAULT_BLUE,
    fontSize: 14,
    fontWeight: "600",
  },
  fbkLoginContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  fbkLogin: {
    fontSize: 18,
    color: Colors.DEFAULT_BLUE,
    fontWeight: "700",
  },
  footer: {
    top: h - 700,
    bottom: 0,
    paddingHorizontal: 85,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkText: {
    color: Colors.DEFAULT_BLUE,
    fontSize: 14,
    fontWeight: "700",
  },
  text: {
    color: Colors.DEFAULT_LIGHT,
    fontSize: 14,
    fontWeight: "600",
  },
});
