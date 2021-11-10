import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { OTP } from "react-native-otp-form";

import { Colors } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const OtpView = () => {
  const navigation = useNavigation();
  const onBack = () => navigation.navigate("Login");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
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
      <View style={styles.content}>
        <Text style={styles.title}>Enter confirmation code</Text>
        <Text style={styles.subTitle}>
          Enter the confirmation code we sent to didierson.idi@vodacom.cd
        </Text>
        <Button
          icon={
            <Icon
              name="refresh-circle"
              type="ionicon"
              size={20}
              color={Colors.DEFAULT_BLUE}
            />
          }
          type="clear"
          title="Resend confirmation code"
        />
        <View>
          <OTP
            codeCount={6}
            containerStyle={{ marginTop: 20 }}
            otpStyles={{ backgroundColor: Colors.INPUT_BACKGROUND }}
          />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 4 }}>
          <Button type="solid" title="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BLACK,
    paddingTop: h / 8,
    paddingBottom: 10,
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
  content: {
    top: h / 15,
    paddingHorizontal: 20,
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
  linkText: {
    color: Colors.DEFAULT_BLUE,
    fontSize: 16,
    fontWeight: "700",
  },
});
