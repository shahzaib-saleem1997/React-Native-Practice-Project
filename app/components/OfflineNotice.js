import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  // console.log(netInfo);
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}> No Internent Connection </AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
});
