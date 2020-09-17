import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import Constants from "expo-constants";
import ListItem from "./../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "./../components/ListItemSeparator";
import Screen from "./../components/Screen";

import authStorage from "../auth/storage";
import useAuth from "./../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
export default function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
