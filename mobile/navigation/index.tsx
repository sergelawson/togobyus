import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthNavigation from "./AuthNavigation";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigation from "./BottomTabNavigation";

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Main"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigation}
        options={{ headerShown: false }}
      />
      {/*       <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={BottomTabNavigation} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};
