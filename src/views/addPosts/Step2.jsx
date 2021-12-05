import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { TextInput } from "react-native-gesture-handler";

export const Step2 = (props) => {
  const navigation = useNavigation();
  const [caption, setCaption] = useState("");

  const handleTextChange =(value) =>{
    setCaption(value);
    navigation.setParams({imageUri : props.route.params.imageUri, caption : value})
  }
  return (
    <View style={styles.container}>
      <View style={styles.captionSection}>
        <View style={styles.captionLeftSection}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={require("../../assets/img/post1.png")}
          />
          <View style={{ width: 200, justifyContent: "center" }}>
            <TextInput
              value={caption}
              onChangeText={handleTextChange}
              underlineColorAndroid="transparent"
              style={{
                color: "grey",
                fontSize: 15,
                paddingHorizontal: 15,
              }}
              placeholder="White a caption..."
            />
          </View>
        </View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: props.route.params.imageUri }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.menuText}>Menu</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.menuText}>Tag People</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.menuText}>Add Location</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.menuText}>Create a Promotion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  captionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  captionLeftSection: {
    flexDirection: "row",
  },
  section: {
    borderTopColor: "#ecede6",
    borderTopWidth: 1,
    padding: 15,
  },
  menuText: {
    color: "black",
    fontSize: 16,
  },
});

export default Step2;
