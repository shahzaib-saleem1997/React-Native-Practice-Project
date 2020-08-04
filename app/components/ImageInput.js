import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import color from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import Screen from "./Screen";

export default function ImageInput({ imageUri, onChangeImage }) {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image");
    }
  };
  return (
    <Screen>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          {imageUri ? (
            <TouchableWithoutFeedback
              onPress={() =>
                Alert.alert(
                  "Delete",
                  "Are you sure you want to delete this image?",
                  [
                    { text: "Yes", onPress: () => setImageUri() },
                    {
                      text: "No",
                      onPress: () => console.log("No pressed"),
                      style: "cancel",
                    },
                  ],
                  { cancelable: false }
                )
              }
            >
              <Image
                source={{
                  uri: imageUri,
                }}
                style={{ width: 80, height: 80, borderRadius: 20 }}
              />
            </TouchableWithoutFeedback>
          ) : (
            <MaterialCommunityIcons
              name="camera"
              size={40}
              onPress={selectImage}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: color.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
