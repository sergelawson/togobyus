import { ScrollView, Linking } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { ProfileItem } from "../../components/Profile";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Box, NormalText } from "../../components/Common";

const About = () => {
  return (
    <Wrapper>
      <Header hasBackButton title="A Propos" />
      <ScrollView style={{ paddingTop: 20 }}>
        <ProfileItem
          onPress={() => Linking.openURL("https://wa.me/22890806077")}
          icon={
            <Ionicons
              name="chatbox-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Service Client"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />

        <ProfileItem
          onPress={() => Linking.openURL("https://togobyus.super.site/faq")}
          icon={
            <Ionicons
              name="information-circle-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="FAQ"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />
        <ProfileItem
          onPress={() => Linking.openURL("https://togobyus.super.site")}
          icon={
            <Ionicons
              name="document-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Termes et Conditions"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />
        <ProfileItem
          onPress={() =>
            Linking.openURL("https://togobyus.super.site/privacy-policy")
          }
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Politique de confidentialité"
          end={
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
        />
        <Box ml={40} mr={40} mt={10}>
          <NormalText>Version 1.0 </NormalText>
        </Box>
      </ScrollView>
    </Wrapper>
  );
};

export default About;

/**
 * CGU
 * Politique de Confidentialité
 * Service Client
 * FAQ
 */
