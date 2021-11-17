import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import { AuthContext } from "../contexts/context";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const LoginView = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent />
      <Image
        source={Images.LOGO_BLACK}
        width="100%"
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            textContentType="emailAddress"
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={onChangePassword}
            textContentType="password"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
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
          <Button onPress={() => login(email, password)} type="solid" title="Login" />
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
        <Pressable onPress={() => navigation.navigate("Signup")}>
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
    backgroundColor: Colors.WHITE,
  },
  logo: {
    width: 250,
    height: 90,
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: Colors.INPUT_BACKGROUND,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    marginStart: 20,
    marginEnd: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  formContainer: {
    marginTop: 60,
  },
  input: {
    marginStart: 10,
    color: Colors.BLACK,
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
    top: h / 6 - 30,
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
