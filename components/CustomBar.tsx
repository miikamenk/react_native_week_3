import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.Action
          icon={() => <Ionicons name="arrow-back" size={24} color="#000" />}
          onPress={navigation.goBack}
        />
      ) : null}
      <Appbar.Content title="MD Nav Demo" />
      {!back ? (
        <Appbar.Action
          icon={() => <Ionicons name="arrow-forward" size={24} color="#000" />}
          onPress={() => navigation.navigate("Second")}
        />
      ) : null}
    </Appbar.Header>
  );
}
