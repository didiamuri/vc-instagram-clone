import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import Checkbox from "expo-checkbox";
import { Colors } from "../../constants";

const PasswordForm = ({ values, handleChange, back, continues }) => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create a password</Text>
        <Text style={styles.subTitle}>
          We can remember the password, so you won't need to enter it on your
          Cloud device.
        </Text>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              value={values.password}
              defaultValue={values.password}
              onChangeText={(val) => handleChange(val)}
              textContentType="password"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={Colors.CUSTOM_LIGHT}
              style={styles.input}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? Colors.DEFAULT_BLUE : undefined}
            />
            <Text style={styles.paragraph}>Save password</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button onPress={continues} type="solid" title="Next" />
        </View>
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

export default PasswordForm;

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
  text: {
    color: Colors.DEFAULT_LIGHT,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    marginLeft: 0,
  },
  paragraph: {
    fontSize: 15,
  },
});
