import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import { Foundation, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ProfileItem } from "../../components/Profile";

const Profile = () => {
  return (
    <Wrapper>
      <Header title="Profile" />
      <ScrollView>
        <Box pt={30} pb={30} align="center">
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 30,
            }}
            source={{
              uri: "https://randomuser.me/api/portraits/women/30.jpg",
            }}
          />
          <BoldText size={20}>Black Panther</BoldText>
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
              name="call-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Numéro Utiles"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />
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
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
