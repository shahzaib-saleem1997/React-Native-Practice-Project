import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "./../screens/RegisterScreen";
import LoginScreen from "./../screens/LoginScreen";
import WelcomeScreen from "./../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="WelcomeScreen"
  >
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
