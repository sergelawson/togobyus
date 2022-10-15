import { ScrollView } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { ProfileItem } from "../../components/Profile";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const About = () => {
  return (
    <Wrapper>
      <Header hasBackButton title="A Propos" />
      <ScrollView style={{ paddingTop: 20 }}>
        <ProfileItem
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
          icon={
            <Ionicons
              name="document-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Terms and Conditions"
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
              name="ios-lock-closed-outline"
              color={Colors.light.primary}
              size={24}
            />
          }
          title="Privacy policy"
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

export default About;

/**
 * CGU
 * Politique de Confidentialité
 * Service Client
 * FAQ
 */
