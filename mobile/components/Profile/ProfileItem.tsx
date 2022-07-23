import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { FC } from "react";
import { Box, FlexBox, NormalText } from "../Common";
import { Fontisto } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

type ProfileItemProps = {
  icon: React.ReactNode;
  title: string;
  end?: React.ReactNode;
  onPress?: () => void;
};

const ProfileItem: FC<ProfileItemProps> = ({ icon, title, end, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box
        style={{ backgroundColor: "#FFFFFF", borderRadius: 10 }}
        pl={13}
        pr={13}
        pt={13}
        pb={13}
        ml={30}
        mr={30}
        mb={12}
        flexDirection="row"
        align="center"
      >
        <Box mr={15}>{icon}</Box>
        <FlexBox flex={1}>
          <NormalText size={16}>{title}</NormalText>
        </FlexBox>
        <Box>{end}</Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default ProfileItem;
