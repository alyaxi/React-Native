import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
const CustomListItems = () => {
  return (
    <ListItem>
      <Avatar
      rounded
        source={{
          uri: "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
        }}
      />
      <ListItem.Content>
          <ListItem.Title>
              Ali Chat
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">This is Test Subtitle</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
export default CustomListItems;

const styles = StyleSheet.create({});
