import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import CustomListItems from "../components/CustomListItems";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const singOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return unsubscribe;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerTint: "center",
      headerLeft: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity onPress={singOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons onPress={() => {
              navigation.navigate("AddChat");
            }} name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <ScrollView>
       {chats.map(({id, data: {chatName}})=> (
         <CustomListItems key={id} id={id} chatName={chatName }/>
       ))}
     
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
