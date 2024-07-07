import { ViewProps, Image, Pressable, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";
import { placeholder_blank_green } from "../../constants/Images";
import usePlaces from "../../hooks/usePlaces";
import { Places } from "../../src/models";

export type PlaceListCardProps = {
  id: string;
  image_url: string | null | undefined;
  name: string | null | undefined;
  city: string | null | undefined;
  type: string | null | undefined;
  onPress: (
    value: Pick<PlaceListCardProps, "image_url" | "name" | "id">
  ) => void;
};

const CardContainer = styled.View<ViewProps>`
  background-color: ${Colors.light.light};
  border-radius: 10px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const PlaceListCard: React.FC<PlaceListCardProps> = ({
  id,
  image_url,
  name,
  city,
  type,
  onPress,
}) => {
  const [image, setImage] = useState<string | undefined | null>(image_url);

  const dateFormat = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const handlePress = () => {
    onPress({
      id,
      image_url,
      name,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <CardContainer>
        <ImageBackground
          style={{
            borderRadius: 5,
            width: 80,
            height: 60,
          }}
          source={{ uri: placeholder_blank_green }}
        >
          <Image
            style={{
              borderRadius: 5,
              width: 80,
              height: 60,
              resizeMode: "cover",
            }}
            source={{ uri: image || placeholder_blank_green }}
          />
        </ImageBackground>
        <Box flex={1} ml={14}>
          <BoldText numberOfLines={1} size={14}>
            {name}
          </BoldText>
          <NormalText numberOfLines={1} pt={1} size={13}>
            {type}
          </NormalText>
          <Box flexDirection="row">
            <NormalText
              numberOfLines={1}
              color={Colors.light.secondary}
              pt={1}
              size={13}
            >
              {city}
            </NormalText>
          </Box>
        </Box>
      </CardContainer>
    </Pressable>
  );
};

export default PlaceListCard;
