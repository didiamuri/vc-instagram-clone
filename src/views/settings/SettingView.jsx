import React, { useContext } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, ListItem } from "react-native-elements";
import { AuthContext } from "../../contexts/context";

const SettingView = () => {
  const items = [
    {
      name: "Follow and Invite Friends",
      icon: "person-add-outline",
    },
    {
      name: "Notifications",
      icon: "notifications-outline",
    },
    {
      name: "Business",
      icon: "business-outline",
    },
    {
      name: "Privacy",
      icon: "lock-closed-outline",
    },
    {
      name: "Payments",
      icon: "card-outline",
    },
    {
      name: "Ads",
      icon: "megaphone-outline",
    },
    {
      name: "Account",
      icon: "person-circle-outline",
    },
    {
      name: "Help",
      icon: "help-buoy-outline",
    },
    {
      name: "About",
      icon: "information-circle-outline",
    },
  ];

  const { logOut } = useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {items.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="ionicon" size={25} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <View style={{ alignItems: "flex-start", marginHorizontal: 10, marginBottom: 20 }}>
        <Text
          style={{ fontSize: 18, paddingVertical: 10, paddingHorizontal: 10 }}
        >
          Logins
        </Text>
        <Button title="Add Account" type="clear" onPress={() => {}} />
        <Button
          title="Log Out"
          type="clear"
          onPress={() => {
            logOut();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default SettingView;

const styles = StyleSheet.create({});
