import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Back to Login"
    });
  }, [navigation]);

  const register = () => {

  }
  return (
    <View style={styles.container}>
      <Text h3 style={{ marginBottom: 50, color: "#232323" }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="text"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture Url (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button raised onPress={register} title="Register" containerStyle={styles.button}/>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white"
  },
  button: {
      width:200,
      marginTop:10
  },
  inputContainer: {
      width: 300
  }
});
