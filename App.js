import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Switch,
  Button,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";

import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputMosh from "./app/components/ImageInputMosh";

// const categories = [
//   {
//     label: "Furniture",
//     value: 1,
//   },
//   {
//     label: "Clothing",
//     value: 2,
//   },
//   {
//     label: "Cameras",
//     value: 3,
//   },
// ];

// // export default function App() {
// //   const [category, setCategory] = useState();

// //   return <ListingEditScreen />;
// // }

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
//   );
// };
// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View Tweets"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>Tweet Details {route.params.id}</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({route}) =>  ({title: "Tweet Details" })}
//     />
//   </Stack.Navigator>
// );

// export default function App() {
//   return <ListingEditScreen />;
// }

// const styles = StyleSheet.create({});

// export default function App() {
//   const [imageUri, setImageUri] = useState();

//   const requestPermission = async () => {
//     const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
//     if (!granted) alert("You need to enable permission to access the library.");
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []); //code here will be equivalent to componentDidMount

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       if (!result.cancelled) setImageUri(result.uri);
//     } catch (error) {
//       console.log("Error reading an image");
//     }
//   };

//   return (
//     <Screen>
//       <Button title="Select Image" onPress={selectImage} />
//       <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
//     </Screen>
//   );
// }

export default function App() {
  // const [imageUri, setImageUri1] = useState();
  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  //   if (!granted) alert("You need to enable permission to access the library.");
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []); //code here will be equivalent to componentDidMount
  return (
    <Screen>
      <ImageInputMosh />
    </Screen>
  );
}
