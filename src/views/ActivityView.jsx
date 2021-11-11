import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Activity from "../components/Activity";
import activities from "../utils/activities.json";
const ActivityView = () => {
  return (
    <View>
      <FlatList
        data={activities}
        renderItem={(item, index) => <Activity key={index} item={item} />}
      />
    </View>
  );
};

export default ActivityView;
