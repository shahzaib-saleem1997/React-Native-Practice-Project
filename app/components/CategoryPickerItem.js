import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Icon from "./Icon";

import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}> {item.label} </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    width: "33.33%",
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
