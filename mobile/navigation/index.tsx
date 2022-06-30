import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigation from "./BottomTabNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
        <BottomTabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={BottomTabNavigation}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={BottomTabNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
