import { StatusBar } from "expo-status-bar";
import React from "react";
import { Camera } from "expo-camera";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from "react-native";
//import { AsyncStorage } from "@react-native-community/async-storage";

export default function CameraSucessScreen({ image }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "90%", height: "90%" }}
        source={{
          uri: `data:image/jpg;base64,${image}`,
        }}
      />
      <TouchableOpacity>
        <Text>HIsdogihnapognapgewnhpig</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1.25,
    marginTop: 70,
    width: "90%",
    height: "90%",
  },
  buttonContainer: {
    flex: 0.15,
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
