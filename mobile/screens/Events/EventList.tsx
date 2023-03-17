import { View, Text } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { EventDateSelect } from "../../components/Events";
const EventList = () => {
  return (
    <Wrapper>
      <Header title="Évènements" hasBackButton />
      <EventDateSelect />
    </Wrapper>
  );
};

export default EventList;
