import {
  Image,
  ImageBackground,
  Pressable,
  View,
  ViewProps,
} from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";
//import { Image } from "react-native-expo-image-cache";
import { placeholder_blank_green } from "../../constants/Images";
import usePlaces from "../../hooks/usePlaces";
import { Places } from "../../src/models";
// import { Storage } from "aws-amplify";

export type EventCardProps = {
  id: string;
  image_url: string | null | undefined;
  date: string | null | undefined;
  name: string | null | undefined;
  location: string | null | undefined;
  placesID: string;
  organisersID: string;
  onPress: (
    valu: Pick<
      EventCardProps,
      "image_url" | "name" | "id" | "organisersID" | "placesID"
    >
  ) => void;
};

const CardContainer = styled.View<ViewProps>`
  background-color: ${Colors.light.light};
  border-radius: 20px;
  overflow: hidden;
  width: 220px;
  margin-right: 20px;
`;

const EventClass = styled.View<ViewProps>`
  background-color: ${Colors.light.light};
  border-radius: 5px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const EventDate = styled.View<ViewProps>`
  background-color: ${Colors.light.light};
  border-radius: 5px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  left: 15px;
`;

const EventCard: React.FC<EventCardProps> = ({
  id,
  image_url,
  date,
  name,
  location,
  placesID,
  organisersID,
  onPress,
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
        <ImageBackground
          style={{ width: 220, height: 150 }}
          source={{ uri: placeholder_blank_green }}
        >
          <Image
            style={{ width: 220, height: 150, resizeMode: "cover" }}
            source={{ uri: image || placeholder_blank_green }}
          />
        </ImageBackground>

        {/*       <EventClass>
        <Ionicons name="sunny-sharp" size={14} color="black" />
      </EventClass> */}
        <EventDate>
          <BoldText style={{ lineHeight: 16 }}>
            {date && new Date(date).getDate()}
          </BoldText>
          <NormalText
            style={{ lineHeight: 10 }}
            size={10}
            color={Colors.light.secondary_light}
          >
            {date &&
              new Date(date).toLocaleDateString("fr-FR", { month: "short" })}
          </NormalText>
        </EventDate>
        <BoldText numberOfLines={1} pl={15} pr={15} mt={10}>
          {name}
        </BoldText>
        <Box flexDirection="row" pl={15} pr={15} mt={5} mb={10}>
          <Ionicons
            name="location-outline"
            size={18}
            color={Colors.light.secondary}
          />
          <NormalText color={Colors.light.secondary} numberOfLines={1}>
            {place?.name}
          </NormalText>
        </Box>
      </CardContainer>
    </Pressable>
  );
};

export default EventCard;
