import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { Button } from "react-native-elements";
import { Colors } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const BirthdayView = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Add your date of birth</Text>
        <Text style={styles.subTitle}>
          This won't be part of your public profile.
        </Text>
        <Text style={styles.subTitle}>
          Why do I need to provide my date of birth?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType="none"
            placeholder="10 November 2021"
            placeholderTextColor={Colors.CUSTOM_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 4 }}>
          <Button type="solid" title="Next" />
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BirthdayView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BLACK,
    paddingTop: h / 8,
    paddingBottom: 10,
  },
  content: {
    top: h / 15,
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  subTitle: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: Colors.INPUT_BACKGROUND,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    marginStart: 10,
    color: Colors.DEFAULT_LIGHT,
  },
});
