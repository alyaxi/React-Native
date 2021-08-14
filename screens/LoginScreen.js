import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Input } from "react-native-elements";
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png",
        }}
        style={{ width: 150, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" onPress={signIn} containerStyle={styles.button} />
      <Button  onPress={() => navigation.navigate('Register')} title="Register" containerStyle={styles.button} type="outline" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop:10
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
});
