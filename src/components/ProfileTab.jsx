import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Colors } from "../constants";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const ProfileTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "tab1", icon: "grid", icon2: "grid-outline", type: "ionicon" },
    { key: "tab2", icon: "play", icon2: "play-outline", type: "ionicon" },
    { key: "tab3", icon: "image", icon2: "image-outline", type: "ionicon" },
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        tabBarPosition="top"
        renderScene={SceneMap({
          tab1: _renderTabOne,
          tab2: _renderTabTwo,
          tab3: _renderTabThree,
        })}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#dee5e4" }}
            style={styles.tabBar}
            renderIcon={({ route, focused, color }) => (
              <Icon
                name={focused ? route.icon : route.icon2}
                type={route.type}
                size={25}
              />
            )}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={{ width: w }}
        style={styles.tabView}
      />
    </>
  );
};

const _renderTabOne = () => {
  return (
    <View style={styles.tabRender}>
      <View>
        <Text>Didierson Amuri</Text>
      </View>
    </View>
  );
};

const _renderTabTwo = () => {
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
};

const _renderTabThree = () => {
  return (
    <View>
      <Text>Tab 3</Text>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  tabView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tabBar: {
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 0,
  },
  tabRender: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});
