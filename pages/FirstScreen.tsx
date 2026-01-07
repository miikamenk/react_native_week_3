import React, { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FirstScreen({ navigation }: props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: { color: "#fff" },
      headerRight: () => (
        <Ionicons
          name="arrow-forward"
          size={24}
          color="#fff"
          style={{ marginRight: 0, padding: 0 }}
          onPress={() => navigation.navigate("SecondScreen")}
        />
      ),
    });
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.text}>Welcome to the Home Screen!</Text>
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
