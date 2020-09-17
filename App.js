import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>

    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>
  );

  // NetInfo.addEventListener((netInfo) => console.log(netInfo))
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
  //     const value = await AsyncStorage.getItem("person");
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // demo();
  // const debugTry = async () => {
  //   cache.store("person", { id: 1 });
  //   const data = await cache.get("person");
  //   console.log(data);
  // };
  // debugTry();
  // return null;
}
