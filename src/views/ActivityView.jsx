import React, { useEffect, useState } from "react";
import { View, Text, SectionList, ActivityIndicator } from "react-native";
import Activity from "../components/Activity";
import activities from "../utils/activities.json";
import Endpoints from "../constants/Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ActivityView = () => {
  const { API_URL } = Endpoints;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

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

  const groupData = (value) => {
    let DATA = value.reduce((sections, activity) => {
      const date = new Date(activity.createdAt).getTime() / 1000 / 60 / 60 / 24;
      const today = new Date().getTime() / 1000 / 60 / 60 / 24;
      if (today - date <= 1) {
        let section = sections.find((item) => item.title == "today");
        if (!section) {
          section = {
            title: "today",
            data: [],
          };
          sections.push(section);
        }
        section.data.push(activity);
      } else if (today - date > 1 && today - date <= 7) {
        let section = sections.find((item) => item.title == "this_week");
        if (!section) {
          section = {
            title: "this_week",
            data: [],
          };
          sections.push(section);
        }
        section.data.push(activity);
      } else if (today - date > 7 && today - date <= 30) {
        let section = sections.find((item) => item.title == "this_month");
        if (!section) {
          section = {
            title: "this_month",
            data: [],
          };
          sections.push(section);
        }
        section.data.push(activity);
      } else if (today - date > 30) {
        let section = sections.find((item) => item.title == "earlier");
        if (!section) {
          section = {
            title: "earlier",
            data: [],
          };
          sections.push(section);
        }
        section.data.push(activity);
      }
      return sections;
    }, []);

    return DATA.sort((a, b) =>
      a.title === "today"
        ? -1
        : a.title === "this_week"
        ? -1
        : a.title === "this_month"
        ? -1
        : 1
    );
  };

  const fetchData = () => {
    setLoading(true);
    fetch(API_URL + "/notifications", { headers: headers })
      .then((res) => res.json())
      .then((body) => {
        setData(groupData(body));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getToken();
    fetchData();
  }, []);

  return loading ? (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="grey" size={40} />
      </View>
    </View>
  ) : (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <SectionList
        refreshing={loading}
        onRefresh={fetchData}
        style={{ backgroundColor: "white" }}
        sections={data}
        renderItem={(item, index) => <Activity key={index} item={item.item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={{ margin: 17, fontSize: 16, fontWeight: "600" }}>
              {title === "today"
                ? "Today"
                : title === "this_week"
                ? "This Week"
                : title === "this_month"
                ? "This Month"
                : "Earlier"}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ActivityView;
