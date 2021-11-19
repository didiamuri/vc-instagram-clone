import React, { useRef } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import images from "../utils/activities.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import * as FileSystem from 'expo-file-system';


export const AddPostView = () => {
  const refRBSheet = useRef();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 350, position: "relative" }}>
        <Image
          style={{ height: 350 }}
          source={require("../assets/img/post1.png")}
        />
        <View
          style={{
            backgroundColor: "black",
            opacity: 0.5,
            height: 40,
            width: 40,
            borderRadius: 20,
            position: "absolute",
            top: 295,
            start: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="resize" size={30} color="white" />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          color: "black",
          padding: 10,
          width: Dimensions.get("window").width,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            onPress={() => refRBSheet.current.open()}
            style={{
              color: "black",
              fontSize: 17,
              fontWeight: "400",
              marginEnd: 10,
            }}
          >
            Galery
          </Text>
          <Ionicons
            name="chevron-down-outline"
            color="black"
            size={22}
            onPress={() => refRBSheet.current.open()}
          />

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                background: "rgba(76, 175, 80, 0.9)",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
              container: {
                backgroundColor: "white",
                borderTopStartRadius: 12,
                borderTopEndRadius: 12,
                height: 180,
              },
            }}
          >
            <View style={styles.bottomSheetMenu}>
              <Text style={styles.bottomSheetMenuText}>Folder 1</Text>
              <Text style={styles.bottomSheetMenuText}>Folder 1</Text>
              <Text style={styles.bottomSheetMenuText}>Folder 1</Text>
            </View>
          </RBSheet>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: "grey",
              borderRadius: 15,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}
          >
            <Ionicons name="copy-outline" color="white" size={22} />
            <Text style={{ color: "white", marginStart: 5 }}>
              Select Multiple
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "grey",
              borderRadius: 15,
              padding: 4,
              marginStart: 10,
            }}
          >
            <Ionicons name="camera-outline" color="white" size={22} />
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1, position: "relative" }}>
        <FlatList
          numColumns={4}
          data={images}
          renderItem={(item, index) => (
            <Image
              key={index}
              style={{ width: 100, height: 100, margin: 2 }}
              source={require("../assets/img/image.jpeg")}
            />
          )}
        />
        <View
          style={{
            backgroundColor: "black",
            opacity: 0.8,
            paddingVertical: 10,
            paddingHorizontal: 10,
            position: "absolute",
            top: 220,
            left: Dimensions.get("window").width / 3,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", marginHorizontal: 5 }}>POST</Text>
          <Text style={{ color: "grey", marginHorizontal: 5 }}>STORY</Text>
          <Text style={{ color: "grey", marginHorizontal: 5 }}>LIVE</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingStart: 10,
  },
  bottomSheetMenuText: {
    fontSize: 17,
    marginStart: 10,
  },
});

export default AddPostView;
