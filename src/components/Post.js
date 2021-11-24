import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors, Images } from "../constants";
import Svg, { Path } from "react-native-svg";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const refRBSheet = useRef();
  const toggleLike = () => {
    if (!post.liked_by_me) {
      setPost({ ...post, liked_by_me: true,likes : post.likes+1});
      props.update(post)
    }
  };
  const handleLike = () => {
    if (post.liked_by_me) {
      setPost({ ...post, liked_by_me: false, likes : post.likes-1 });
    } else {
      setPost({ ...post, liked_by_me: true,likes : post.likes+1 });
    }
  };
  lastTap = null;
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      toggleLike();
    } else {
      this.lastTap = now;
    }
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.headerSection}>
        <View>
          <Text>{post.username}</Text>
        </View>
        <View>
          <Ionicons
            onPress={() => refRBSheet.current.open()}
            name="ellipsis-vertical"
            size={Images.IMAGE_ICON_SIZE}
            color={Colors.TAB_ICON_COLOR}
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
                height: 130,
              },
            }}
          >
            <View style={styles.bottomSheetMenu}>
              <View style={styles.bottomSheetMenuItem}>
                <Ionicons
                  name="trash-outline"
                  size={Images.IMAGE_ICON_SIZE}
                  color={Colors.TAB_ICON_COLOR}
                />
                <Text onPress={props.delete(post.id)} style={styles.bottomSheetMenuText}>
                  Delete post
                </Text>
              </View>
              
              <View style={styles.bottomSheetMenuItem}>
                <Ionicons
                  name="flag-outline"
                  size={Images.IMAGE_ICON_SIZE}
                  color={Colors.TAB_ICON_COLOR}
                />
                <Text style={styles.bottomSheetMenuText}>Signaler</Text>
              </View>
            </View>
          </RBSheet>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
        <Image
          style={styles.image}
          source={require("../assets/img/post1.png")}
        />
      </TouchableWithoutFeedback>

      <View style={styles.bottomSection}>
        <View style={styles.iconSection}>
          <View style={styles.imageIcons}>
            <Ionicons
              onPress={handleLike}
              style={styles.icon}
              name={post.liked_by_me ? "heart" : "heart-outline"}
              size={Images.IMAGE_ICON_SIZE}
              color={post.liked_by_me ? "red" : Colors.TAB_ICON_COLOR}
            />
            <Ionicons
              style={styles.icon}
              name="chatbubble-outline"
              size={Images.IMAGE_ICON_SIZE}
              color={Colors.TAB_ICON_COLOR}
            />

            <Svg
              style={styles.icon}
              width={Images.IMAGE_ICON_SIZE}
              height={Images.IMAGE_ICON_SIZE}
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Partager la publication"
              class="_8-yf5 "
              color="#262626"
              fill="currentColor"
              role="img"
              viewBox="0 0 48 48"
            >
              <Path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></Path>
            </Svg>
          </View>
          <View>
            <Text></Text>
          </View>
          <View>
            <Ionicons
              style={styles.icon}
              name="bookmark-outline"
              size={Images.IMAGE_ICON_SIZE}
              color={Colors.TAB_ICON_COLOR}
            />
          </View>
        </View>
        <View style={styles.caption}>
          <Text style={styles.captionText}>{post.likes} Likes</Text>
          <Text style={styles.captionText}></Text>
        </View>
        <View>
          <Text style={styles.commentText}> {post.comment} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "white",
    marginTop: 2,
  },
  headerSection: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bottomSection: {
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  caption: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  captionText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  imageIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginEnd: 12,
  },
  commentText: {
    fontSize: 15,
    paddingTop: 2,
  },
  bottomSheetMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingStart: 20,
  },
  bottomSheetMenuItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  bottomSheetMenuText: {
    fontSize: 17,
    marginStart: 17,
  },
});
export default Post;
