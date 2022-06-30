import { View, Text, Image, ViewProps } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, FlexBox, NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";

export type NotifyItemProps = {
  image_url: string;
  date: string;
  name: string;
  location: string;
  price: number;
};

const CardContainer = styled.View<ViewProps>`
  background-color: ${Colors.light.light};
  border-radius: 10px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const NotifyItem: React.FC<NotifyItemProps> = ({
  image_url,
  date,
  name,
  location,
  price = 5000,
}) => {
  return (
    <CardContainer>
      <Image
        style={{ borderRadius: 5, width: 40, height: 40, resizeMode: "cover" }}
        source={{ uri: image_url }}
      />
      <Box ml={14}>
        <BoldText numberOfLines={1} size={14}>
          {name}
        </BoldText>
        <NormalText
          numberOfLines={1}
          color={Colors.light.secondary}
          pt={1}
          size={13}
        >
          {location}
        </NormalText>
        <NormalText
          numberOfLines={1}
          color={Colors.light.secondary_light}
          pt={1}
          size={13}
        >
          {price.toLocaleString("fr-FR", {
            style: "currency",
            currency: "XOF",
          })}
        </NormalText>
      </Box>
    </CardContainer>
  );
};

export default NotifyItem;
