import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { ProfileItem } from "../../components/Profile";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Box } from "../../components/Common";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  const goToChangeProfile = () => {
    // @ts-ignore
    navigation.navigate("ChangeProfile");
  };

  const goToChangePassword = () => {
    // @ts-ignore
    navigation.navigate("ChangePassword");
  };

  return (
    <Wrapper>
      <Header hasBackButton title="Paramètres" />
      <ScrollView style={{ paddingTop: 20 }}>
        <ProfileItem
          onPress={goToChangeProfile}
          icon={
            <Ionicons
              name="person-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Modifier mon profile"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />

        <ProfileItem
          onPress={goToChangePassword}
          icon={
            <Ionicons
              name="key-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Changer mot de passe"
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
          onPress={() =>
            Alert.alert("Atention", "Vous allez perdre toutes vos données")
          }
          icon={
            <Ionicons
              name="trash-bin-outline"
              color={Colors.light.danger}
              size={24}
            />
          }
          title="Supprimer mon compte"
          textColor={Colors.light.danger}
        />
      </ScrollView>
    </Wrapper>
  );
};

export default Settings;

/**
 * Change Password
 * Change user info
 * Delete Account
 */
