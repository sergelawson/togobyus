import React from "react";
import { ScrollViewProps, View, ViewProps } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";
import CatButton, { CatProps } from "./CatButton";
import EventCard, { EventCardProps } from "./EventCard";
import EventListCard from "./EventListCard";

const ButtonCallContainer = styled.View`
  box-shadow: 0px 15px 20px rgba(0, 165, 13, 0.15);
  width: 46px;
  height: 46px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.light.primary_light};
`;

const SearchBarContainer = styled.View`
  height: 44px;
  background-color: #ffffff;
  padding: 10px;
  flex-direction: row;
  flex: 1;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;
export const HomeContainer = styled.ScrollView<ScrollViewProps>`
  padding-top: 20px;
  padding-bottom: 0px;
`;

export const ButtonCall = () => (
  <ButtonCallContainer>
    <Ionicons name="call-sharp" size={24} color={Colors.light.primary} />
  </ButtonCallContainer>
);

export const SearchBar = () => (
  <SearchBarContainer>
    <Ionicons
      name="search-outline"
      size={22}
      color={Colors.light.secondary_light}
    />

    <NormalText ml={5} size={14} color={Colors.light.secondary_light}>
      Rechercher événements, restaurants...
    </NormalText>
  </SearchBarContainer>
);

export { CatButton, EventCard, EventListCard };
export type { CatProps, EventCardProps };
