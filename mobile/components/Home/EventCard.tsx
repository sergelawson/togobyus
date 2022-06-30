import { View, Image, ViewProps } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";

export type EventCardProps = {
  image_url: string;
  date: string;
  name: string;
  location: string;
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
  image_url,
  date,
  name,
  location,
}) => {
  return (
    <CardContainer>
      <Image
        style={{ width: 220, height: 150, resizeMode: "cover" }}
        source={{ uri: image_url }}
      />
      <EventClass>
        <Ionicons name="sunny-sharp" size={14} color="black" />
      </EventClass>
      <EventDate>
        <BoldText style={{ lineHeight: 16 }}>30</BoldText>
        <NormalText
          style={{ lineHeight: 10 }}
          size={10}
          color={Colors.light.secondary_light}
        >
          Juin
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
          {location}
        </NormalText>
      </Box>
    </CardContainer>
  );
};

export default EventCard;
