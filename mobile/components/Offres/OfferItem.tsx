import React from "react";
import { ViewProps, Image } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, NormalText } from "../Common";

type OfferItemProps = {
  image_url: string;
  date: string;
  name: string;
  location: string;
  percentage: number;
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
const OfferItem: React.FC<OfferItemProps> = ({
  image_url,
  date,
  name,
  location,
  percentage,
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
        <BoldText
          numberOfLines={1}
          color={Colors.light.primary}
          pt={1}
          size={13}
        >
          {percentage} %
          <NormalText
            numberOfLines={1}
            color={Colors.light.secondary}
            pt={1}
            size={13}
          >
            {" "}
            de reduction
          </NormalText>
        </BoldText>
      </Box>
    </CardContainer>
  );
};

export type { OfferItemProps };

export default OfferItem;
