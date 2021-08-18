import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
const CustomListItems = ({id, chatName, enterChat}) => {
  return (
    <ListItem key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Abc
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
export default CustomListItems;

const styles = StyleSheet.create({});
