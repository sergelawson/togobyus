import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthNavigation from "./AuthNavigation";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigation from "./BottomTabNavigation";
import { Search, EventDetail } from "../screens";
import { Utils, UtilsDetail, UtilsType } from "../screens/Utils";
import {
  Selections,
  About,
  Settings,
  Following,
  ChangePassword,
  ChangeProfile,
} from "../screens/Profile";

export default function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
        {isLoggedIn ? <RootNavigator /> : <AuthNavigation />}
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
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="Utils" component={Utils} />
        <Stack.Screen name="UtilsDetail" component={UtilsDetail} />
        <Stack.Screen name="UtilsType" component={UtilsType} />
        <Stack.Screen name="Following" component={Following} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Selections" component={Selections} />
        <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
