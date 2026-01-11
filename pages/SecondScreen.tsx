import React, { useLayoutEffect, useEffect } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";

export default function SecondScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: { color: "#fff" },
    });
  }, [navigation]);

  useEffect(() => {
    const onBackPress = () => {
      return false;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress,
    );
    return () => {
      subscription.remove();
    };
  }, []);
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
