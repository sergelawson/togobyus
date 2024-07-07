import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Offers, Places, Profile } from "../screens/tabs";
import {
  HomeIcon,
  OffreIcon,
  UserIcon,
  ExploreIcon,
} from "../components/Icons";
import { BlurView } from "expo-blur";
import { StyleSheet, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 70 + insets.bottom, position: "absolute" },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: Colors.light.secondary,
        tabBarBackground: () => (
          <>
            {Platform.OS == "ios" ? (
              <BlurView
                tint="light"
                intensity={70}
                style={StyleSheet.absoluteFill}
              />
            ) : (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  { backgroundColor: "#FFFFFF" },
                ]}
              />
            )}
          </>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="Places"
        component={Places}
        options={{
          tabBarIcon: ({ color }) => <ExploreIcon size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ color }) => <OffreIcon size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <UserIcon size={26} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
