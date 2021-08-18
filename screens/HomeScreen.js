import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import CustomListItems from "../components/CustomListItems";
import { auth } from "../firebase";
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
  const singOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login")
    })
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black"},
      headerTintColor: "black",
      headerTint: "center",
      headerLeft: () => (
          <View style={{marginRight: 20}}>
            <TouchableOpacity onPress={singOutUser} activeOpacity={0.5}>
              <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
              </TouchableOpacity>
          </View>
      ),
      headerRight: () => {
        <View style={{}}>
          <TouchableOpacity>
            <AntDesign name="camera" size={24} color="black"  />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="pencil" size={24} color="black"  />
          </TouchableOpacity>
        </View>
      }
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItems />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
