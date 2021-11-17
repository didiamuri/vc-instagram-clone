import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Colors } from "../../constants";
import { AuthContext } from "../../contexts/context";

const Confirm = ({ values, back }) => {
  const navigation = useNavigation();

  const { signUp } = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign up as {values.username}?</Text>
        <Text style={styles.subTitle}>
          Choose a username for your new account. You can always change it
          later.
        </Text>
        <View>
          <View style={{ marginTop: 20 }}>
            <Button onPress={() => signUp(values)} type="solid" title="Sign Up" />
          </View>
        </View>
      </View>
      <View style={styles.terms}>
        <Text style={styles.text}>
          By tapping 'Sign Up', you agree to our Terms, Data Policy and Cookies
          Policy.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.linkText}> Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    top: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.BLACK,
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    color: Colors.BLACK,
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
  },
  footer: {
    bottom: 40,
    paddingHorizontal: 85,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkText: {
    color: Colors.DEFAULT_BLUE,
    fontSize: 14,
    fontWeight: "700",
  },
  terms: {
    bottom: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.DEFAULT_LIGHT,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
