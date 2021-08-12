import React from 'react'
import {StyleSheet,Text,View, TextInput , Button, Alert } from "react-native"
export default function InputForm() {
    

    const [ChangeText, setChangeText] = React.useState("")
    console.log(ChangeText);
    const Separator = () => (
        <View style={styles.separator} />
      );
    return (
        <View>
            <Text style={styles.text}>Enter Username: </Text>
            <TextInput style={styles.input} placeholder="Enter your Username" onChangeText={(val) => setChangeText(val)
            }/>
            <Text style={styles.text}>Enter Password: </Text>
            <TextInput style={styles.input}  placeholder="Enter your Password" />
            <Button
        title="Submit"
        onPress={() => Alert.alert('Button pressed')}
      />
              <Separator />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        color: "black",
        backgroundColor:"white",
        marginVertical:10,
        padding:10,
        borderRadius:10,
        borderWidth:1,
        width:300
    },
    text: {
        color: "black"
    }
})
