import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native-elements";
import moment from "moment";
import { Colors } from "../../constants";

const BirthdayForm = ({ values, handleChange, back, continues }) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    handleChange(moment(currentDate).format("L"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Add your date of birth</Text>
        <Text style={styles.subTitle}>
          This won't be part of your public profile. Wy do I need to provide my
          date of birth?
        </Text>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              value={values.birthday}
              defaultValue={moment().format("L")}
              textContentType="none"
              onPressIn={() => setShow(true)}
              placeholder={moment().format("LL")}
              placeholderTextColor={Colors.CUSTOM_LIGHT}
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          Use your own date of birth, even if this account is for a business, a
          pet or something else.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Button onPress={continues} type="solid" title="Next" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            dateFormat="shortdate"
          />
        )}
      </View>
    </View>
  );
};

export default BirthdayForm;

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
    bottom: 30,
    paddingHorizontal: 10,
  },
  linkText: {
    color: Colors.DEFAULT_BLUE,
    fontSize: 14,
    fontWeight: "700",
  },
  text: {
    color: Colors.DEFAULT_LIGHT,
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
});
