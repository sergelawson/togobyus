import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import { Foundation, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ProfileItem } from "../../components/Profile";
import { Image } from "react-native-expo-image-cache";
import { useAppSelector } from "../../store";
import useAuth from "../../hooks/useAuth";
import { placeholder_blank_green } from "../../constants/Images";

const Profile = () => {
  const { user } = useAppSelector((state) => state);
  const userData = user.user;

  const firstChar = user.user?.name?.charAt(0);
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Header title="Profile" />
      <ScrollView>
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
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 30,
              }}
              uri={`https://placehold.jp/120/daf0d9/808080/250x250.png?text=${firstChar}`}
              preview={{ uri: placeholder_blank_green }}
            />
          </View>

          <BoldText size={20}>{userData?.name}</BoldText>
        </Box>
        <ProfileItem
          icon={
            <Foundation name="ticket" color={Colors.light.primary} size={24} />
          }
          title="Mes Tickets"
          end={
            <NormalText size={16} color={Colors.light.primary}>
              03
            </NormalText>
          }
        />
        <ProfileItem
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
              54
            </NormalText>
          }
        />
        <Box mb={15} />

        <ProfileItem
          icon={
            <Ionicons
              name="people-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Contact"
          end={
            <NormalText size={16} color={Colors.light.primary}>
              135
            </NormalText>
          }
        />
        <ProfileItem
          icon={
            <Ionicons
              name="calendar-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Mon Agenda"
          end={
            <NormalText size={16} color={Colors.light.primary}>
              05
            </NormalText>
          }
        />
        <Box mb={15} />
        <ProfileItem
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
