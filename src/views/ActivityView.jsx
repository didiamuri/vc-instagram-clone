import React, { useEffect, useState } from "react";
import { View, Text, SectionList } from "react-native";
import Activity from "../components/Activity";
import activities from "../utils/activities.json";
import API_URL from "../constants/Others";

const ActivityView = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL+'/notifications')
      .then((res) => res.json())
      .then((body) => {
        console.log(data);
        setData(body)
        setLoading(false);
      });
  }, []);
  
  let DATA = activities.reduce((sections, activity) => {
    const date = new Date(activity.created_at).getTime() / 1000 / 60 / 60 / 24;
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

  DATA.sort((a, b) =>
    a.title === "today"
      ? -1
      : a.title === "this_week"
      ? -1
      : a.title === "this_month"
      ? -1
      : 1
  );
  return (
    <View style={{ backgroundColor: "white" }}>
      {loading ? (
        <View style={{flex :1, justifyContent :"center",  alignItems :"center"}}>
          <Text>Loading</Text>
        </View>
      ) : (
        <SectionList
          sections={DATA}
          renderItem={(item, index) => <Activity key={index} item={item} />}
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
      )}
    </View>
  );
};

export default ActivityView;
