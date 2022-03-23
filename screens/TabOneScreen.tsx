import { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { BottomMenu } from "../components/BottomMenu";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <BottomMenu visible={visible}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Modal")}
        >
          <Text style={styles.title}>Modal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("TabTwo")}
        >
          <Text style={styles.title}>TabTwo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Hola", "Hola")}
        >
          <Text style={styles.title}>Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Hola", "Hola")}
        >
          <Text style={styles.title}>Alert 2</Text>
        </TouchableOpacity>
      </BottomMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  btn: {
    padding: 15,
  },
});
