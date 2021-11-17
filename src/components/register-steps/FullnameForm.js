import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { Colors } from "../../constants";

const FullnameForm = ({ values, handleChange, continues, back }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Add your name</Text>
        <Text style={styles.subTitle}>
          Add your name so that friends can find you.
        </Text>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              value={values.fullname}
              defaultValue={values.fullname}
              onChangeText={(val) => handleChange(val)}
              textContentType="name"
              placeholder="Full name"
              placeholderTextColor={Colors.CUSTOM_LIGHT}
              style={styles.input}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
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

export default FullnameForm;

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
});
