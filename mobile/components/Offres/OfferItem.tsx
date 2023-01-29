import React, { useEffect, useState } from "react";
import { ViewProps, Pressable, Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { placeholder_blank_green } from "../../constants/Images";
import { BoldText, Box, NormalText } from "../Common";
import usePlaces from "../../hooks/usePlaces";
import { Places } from "../../src/models";
/* type OfferItemProps = {
  image_url: string;
  date: string;
  name: string;
  location: string;
  percentage: number;
}; */

type OfferItemProps = {
  id: string;
  name: string | null | undefined;
  imageUrl: string | null | undefined;
  placesID: string;
  amount: string;
  promo_amount: string;
  start_date: string | null | undefined;
  end_date: string | null | undefined;
  description: string | null | undefined;
};

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

const OfferItem: React.FC<OfferItemProps> = ({
  id,
  imageUrl,
  start_date,
  name,
  promo_amount,
  amount,
  end_date,
  placesID,
}) => {
  const { getPlace } = usePlaces();
  const [place, setPlace] = useState<Places | undefined>();
  const [image, setImage] = useState<string | undefined | null>(imageUrl);

  useEffect(() => {
    fetchPlaceById();
    // getImages();
  }, []);

  const fetchPlaceById = async () => {
    if (placesID) {
      try {
        const response = await getPlace(placesID);
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

  /*   const handlePress = () => {
    onPress({
      id,
      image_url,
      name,
      placesID,
      organisersID,
    });
  }; */
  return (
    <Pressable>
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

        <Box ml={14}>
          <BoldText numberOfLines={1} size={14}>
            {name}
          </BoldText>
          {/* <NormalText numberOfLines={1} pt={1} size={13}>
            {end_date &&
              new Date(end_date).toLocaleDateString("fr-Fr", dateFormat as any)}
          </NormalText> */}
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
          <Box flexDirection="row" align={"flex-end"}>
            <NormalText
              style={{ textDecorationLine: "line-through", marginRight: 5 }}
            >
              {parseInt(amount).toLocaleString("fr-FR", {
                style: "currency",
                currency: "XOF",
              })}
            </NormalText>
            <NormalText size={12} color={Colors.light.primary}>
              {parseInt(promo_amount).toLocaleString("fr-FR", {
                style: "currency",
                currency: "XOF",
              })}
            </NormalText>
          </Box>
        </Box>
      </CardContainer>
    </Pressable>
  );
};

export type { OfferItemProps };

export default OfferItem;
