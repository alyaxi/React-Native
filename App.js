import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView} from 'react-native';
import InputForm from './inputForm';
export default function App() {
  const data = [
    {name: "syed", key: "1"},
    {name: "Ali", key: "2"},
    {name: "Zaman", key: "3"},
    {name: "Muhammad", key: "4"},
    {name: "waqar", key: "5"},
    {name: "Hanifi", key: "6"},
    {name: "Areeb", key: "7"},
    {name: "Hussain", key: "8"},
    {name: "Khan", key: "9"}

]
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Text style={styles.heading}>Login </Text>
      <InputForm/>
      <FlatList numColumns={3} data={data} renderItem={({item}) => <Text style={styles.list}>{item.name.toUpperCase()}</Text>} keyExtractor={(item) => item.key}/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    // marginVertical:10
  },
  heading: {
    marginVertical:30,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor: "white",
    paddingHorizontal:10,
    paddingVertical:10,
    width:100,
  }
});
          