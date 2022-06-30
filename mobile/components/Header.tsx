import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { Box, FlexBox, NormalText } from "./Common";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, hasBackButton }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  if (hasBackButton) {
    return (
      <Box flexDirection="row" pt={20} pb={10} pl={30} pr={30}>
        <Pressable onPress={goBack}>
          <Box>
            <Ionicons
              color={Colors.light.primary}
              name="arrow-back-sharp"
              size={24}
            />
          </Box>
        </Pressable>
        <FlexBox flex={1} align="center" justify="center">
          <NormalText ml={-30} size={18}>
            {title}
          </NormalText>
        </FlexBox>
      </Box>
    );
  }
  return (
    <Box align="center" pt={20} pb={10}>
      <NormalText size={18}>{title}</NormalText>
    </Box>
  );
};

export default Header;
