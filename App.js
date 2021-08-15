import "react-native-gesture-handler"
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const globalScreenNavigation = {
  headerStyle: {backgroundColor: "#1768AC"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white"
}
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenNavigation}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
