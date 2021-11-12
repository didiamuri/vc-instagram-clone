import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { Colors } from "../constants";

const ProfileStory = () => {
  const news = [
    {
      id: 1,
      title: 'Nature',
      image: require("../assets/img/post2.jpg")
    },
    {
      id: 2,
      title: 'A la une',
      image: require("../assets/img/post1.jpg")
    },
    {
      id: 3,
      title: 'Cuisine',
      image: require("../assets/img/post3.jpg")
    },
    {
      id: 4,
      title: 'A la une',
      image: require("../assets/img/post1.jpg")
    },
    {
      id: 5,
      title: 'A la une',
      image: require("../assets/img/post2.jpg")
    },
    {
      id: 6,
      title: 'A la une',
      image: require("../assets/img/post3.jpg")
    },
    {
      id: 7,
      title: 'A la une',
      image: require("../assets/img/post1.jpg")
    },
    {
      id: 8,
      title: 'A la une',
      image: require("../assets/img/post1.jpg")
    },
    {
      id: 9,
      title: 'A la une',
      image: require("../assets/img/post1.jpg")
    }
  ];

  const _renderNews = () => {
    return (
      <View style={styles.container}>
        {news.map(newItem => (
          <View key={newItem.id} style={styles.content}>
            <Avatar
              source={newItem.image} rounded size={65} avatarStyle={styles.image}
            />
            <Text style={styles.text}>{newItem.title}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ paddingVertical: 20, marginLeft: 5, marginTop: -20 }}>
      {_renderNews()}
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
  },
  content: {
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  image: {
    borderWidth: 4,
    borderColor: Colors.GRAY_LIGHT,
  },
  text: {
    fontSize: 13,
    marginTop: 2,
    fontWeight: "500"
  },
});
