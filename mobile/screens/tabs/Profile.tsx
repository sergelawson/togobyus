import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import { Foundation, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ProfileItem } from "../../components/Profile";
import { useAppDispatch, useAppSelector } from "../../store";
import useAuth from "../../hooks/useAuth";
import { placeholder_blank_green } from "../../constants/Images";
import { useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Organisers, UserEvent } from "../../src/models";
import { set_user_events, set_user_orgs } from "../../store/slice/userSlice";
import { UserOrganisers } from "../../src/models";

const Profile = () => {
  const { user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const userData = user?.user as {
    email: string;
    name: string;
  };
  const userEvents = user?.events as UserEvent[];
  const userOrgs = user?.orgs as Organisers[];

  const firstChar = userData.name?.charAt(0);
  const { signOut } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    if (!userData) return;

    const email = userData.email;

    const subscription = DataStore.observeQuery(UserEvent, (p) =>
      p.usersID("eq", email)
    ).subscribe((snapshot) => {
      const { items, isSynced } = snapshot;

      dispatch(set_user_events(items));
    });

    const subs_org = DataStore.observeQuery(UserOrganisers, (p) =>
      p.usersID("eq", email)
    ).subscribe((snapshot) => {
      const { items, isSynced } = snapshot;

      dispatch(set_user_orgs(items));
    });

    return () => {
      subscription.unsubscribe();
      subs_org.unsubscribe();
    };
  }, []);

  return (
    <Wrapper>
      <Header title="Profile" />
      <ScrollView style={{ paddingBottom: 70 }}>
        <Box pt={30} pb={30} align="center">
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 30,
              overflow: "hidden",
            }}
          >
            <ImageBackground
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 30,
              }}
              source={{ uri: placeholder_blank_green }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginBottom: 30,
                }}
                source={{
                  uri: `https://placehold.jp/120/daf0d9/808080/250x250.png?text=${firstChar}`,
                }}
              />
            </ImageBackground>
          </View>

          <BoldText size={20}>{userData?.name}</BoldText>
        </Box>
        <ProfileItem
          onPress={() => navigation.navigate("Selections")}
          icon={
            <Ionicons
              name="bookmark-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Mes Séléctions"
          end={
            <NormalText size={16} color={Colors.light.primary}>
              {userEvents?.length || 0}
            </NormalText>
          }
        />
        <ProfileItem
          onPress={() => navigation.navigate("Following")}
          icon={
            <Ionicons
              name="people-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Mes abonnements"
          end={
            <NormalText size={16} color={Colors.light.primary}>
              {userOrgs?.length || 0}
            </NormalText>
          }
        />

        <Box mb={15} />

        <ProfileItem
          onPress={() => navigation.navigate("Settings")}
          icon={
            <Ionicons
              name="settings-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Paramètres"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />
        <ProfileItem
          onPress={() => navigation.navigate("About")}
          icon={
            <Ionicons
              name="information-circle-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="A Propos"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />
        <Box mb={15} />

        <ProfileItem
          onPress={signOut}
          icon={
            <Ionicons
              name="log-out-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Se déconnecter"
        />
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
