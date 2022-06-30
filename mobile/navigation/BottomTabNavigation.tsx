import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Offers, Notifications, Profile } from "../screens/tabs";
import {
  DiscountIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
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
          tabBarIcon: ({ color }) => <SearchIcon size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ color }) => <DiscountIcon size={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <NotificationIcon size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon size={26} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
