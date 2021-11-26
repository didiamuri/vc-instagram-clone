import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Text, Image, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors, Images } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/core";
import Step2 from "../views/addPosts/Step2";
import Endpoints from "../constants/Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

const AddPostStep2CustomHeader = (props) => {
  const { API_URL } = Endpoints;
  const navigation = useNavigation();

  const [token, setToken] = useState(null);
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        setToken(token);
      }
    } catch (e) {}
  };

  const formData = (file, body = {}) => {
    const data = new FormData();

    data.append("file", {
      name: file.substr(file.lastIndexOf("/") + 1),
      type: `image/${file.substr(file.lastIndexOf(".") + 1)}`,
      uri: Platform.OS === "ios" ? file.replace("file://", "") : file,
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    return data;
  };

  const handleSubmit = async () => {

    const file = props.route.params.imageUri;
    const base64 = await FileSystem.readAsStringAsync(file, {
      encoding: "base64",
    });

    fetch(`${API_URL}/images`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: {
        caption: props.route.params.caption,
        extension: file.substr(file.lastIndexOf(".") + 1),
        file: base64,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response", res);
        navigation.navigate("home");
      })
      .catch((e) => console.log("error", e));
  };

  const savePost = (post) => {
    console.log("saving posts...");
    fetch(API_URL + "/posts", {
      headers: { ...headers, method: "POST", body: post },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        navigation.navigate("home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <View style={styles.customHeaderContainer}>
        <View style={styles.leftSection}>
          <Ionicons style={styles.closeIcon} size={40} name="close-outline" />
          <Text style={styles.title}>New Post</Text>
        </View>
        <Ionicons
          onPress={() => handleSubmit()}
          size={35}
          name="checkmark-outline"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  customHeaderContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 8,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  closeIcon: {
    marginEnd: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AddPostStep2CustomHeader;
