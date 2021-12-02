import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import posts from "../utils/posts.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors, Images } from "../constants";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Post from "../components/Post";
import Endpoints from "../constants/Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeView = (props) => {
  const { API_URL } = Endpoints;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [reload, setReload] = useState(
    props.route.params && props.route.params.reload
  );

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token !== null) {
        setToken(token);
      }
    } catch (e) {}
  };
  const headers = {
    method: "GET",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  const fetchData = () => {
    console.log("...fetching...");
    setLoading(true);
    fetch(API_URL + "/posts", { headers: headers })
      .then((res) => res.json())
      .then((body) => {
        setData(body);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const updatePost = (post) => {
    console.log("updating posts...");
    fetch(API_URL + "/posts", {
      headers: { ...headers, method: "PUT", body: post },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const likePost = (id) => {
    console.log("liking posts...");
    fetch(API_URL + "/likePost", {
      headers: { ...headers},
      method: "POST",
      body: JSON.stringify({ post: id }),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        //fetchData();
      })
      .catch((err) => console.log(err));
  };
  const deletePost = (id) => {
    console.log(API_URL + "/posts/" + id);
    fetch(API_URL + "/posts/" + id, {
      headers: { ...headers },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        fetchData();
      })
      .catch((err) => console.log("-----" + err));
  };

  useEffect(() => {
    getToken();
    fetchData();
  }, [props.route]);

  return loading ? (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="grey" size={40} />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => fetchData} />
        }
        ListHeaderComponent={<Story />}
        data={data}
        renderItem={({ item, index }) => (
          <Post
            update={(post) => updatePost(post)}
            likePost={(id) => likePost(id)}
            delete={(id) => deletePost(id)}
            key={index}
            post={item}
          />
        )}
      ></FlatList>
    </View>
  );
};

const Story = () => {
  return (
    <View style={styles.statusContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.status}>
          <Image
            style={styles.statusImage}
            source={require("../assets/img/post1.png")}
          />
          <Text style={styles.statusUsername}>Votre story</Text>
        </View>
        {Array(10)
          .fill(0)
          .map((value, index) => (
            <View key={index} style={styles.status}>
              <Image
                style={styles.statusImage}
                source={require("../assets/img/post1.png")}
              />
              <Text style={styles.statusUsername}>user{index}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  statusContainer: {
    height: 140,
    paddingStart: 10,
    paddingEnd: 20,
    paddingTop: 8,
    paddingBottom: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  status: {
    marginEnd: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  statusImage: {
    overflow: "hidden",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: "pink",
    borderWidth: 2,
  },
  statusUsername: {
    fontSize: 13,
    color: "black",
    marginTop: 5,
  },
});

export default HomeView;
