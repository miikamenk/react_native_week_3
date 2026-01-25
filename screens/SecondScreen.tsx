import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SecondScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Welcome to the second screen!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
