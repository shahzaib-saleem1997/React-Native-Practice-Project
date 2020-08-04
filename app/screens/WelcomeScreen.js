import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

const registerClicked = () => {
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: false }
  );
};

export default function WelcomeScreen(props) {
  return (

    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}> Sell What you don't need</Text>
      </SafeAreaView>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log("Login Clicked")} />
        <AppButton
          color="secondary"
          title="register"
          onPress={registerClicked}
        />
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    marginTop: StatusBar.currentHeight,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
