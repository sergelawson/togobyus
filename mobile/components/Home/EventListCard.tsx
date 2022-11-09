import { View, Text, ViewProps, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";
import { placeholder_blank_green } from "../../constants/Images";
import usePlaces from "../../hooks/usePlaces";
import { Places } from "../../src/models";

export type EventCardProps = {
  id: string;
  image_url: string | null | undefined;
  date: string | null | undefined;
  name: string | null | undefined;
  location: string | null | undefined;
  placesID: string;
  organisersID: string;
  onPress: (
    value: Pick<
      EventCardProps,
      "image_url" | "name" | "id" | "organisersID" | "placesID"
    >
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

const EventListCard: React.FC<EventCardProps> = ({
  id,
  image_url,
  date,
  name,
  location,
  onPress,
  placesID,
  organisersID,
}) => {
  const { getPlace } = usePlaces();
  const [place, setPlace] = useState<Places | undefined>();
  const [image, setImage] = useState<string | undefined | null>(image_url);

  useEffect(() => {
    fetchPlaceById();
    // getImages();
  }, []);

  const fetchPlaceById = async () => {
    if (location) {
      try {
        const response = await getPlace(location);
        setPlace(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  /*   const getImages = async () => {
    if (image_url) {
      const url = await Storage.get(image_url);
      setImage(url);
    }
  }; */

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
      placesID,
      organisersID,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <CardContainer>
        <Image
          style={{
            borderRadius: 5,
            width: 80,
            height: 60,
            resizeMode: "cover",
          }}
          uri={image || placeholder_blank_green}
          preview={{ uri: placeholder_blank_green }}
        />
        <Box ml={14}>
          <BoldText numberOfLines={1} size={14}>
            {name}
          </BoldText>
          <NormalText numberOfLines={1} pt={1} size={13}>
            {date &&
              new Date(date).toLocaleDateString("fr-Fr", dateFormat as any)}
          </NormalText>
          <Box flexDirection="row">
            <NormalText
              numberOfLines={1}
              color={Colors.light.secondary}
              pt={1}
              size={13}
            >
              {place?.name}, {place?.city}
            </NormalText>
          </Box>
        </Box>
      </CardContainer>
    </Pressable>
  );
};

export default EventListCard;
