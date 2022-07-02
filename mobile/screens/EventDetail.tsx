import { View, Text, Image } from "react-native";
import React from "react";
import { BoldText, Box } from "../components/Common";
import { BodyContent, HeaderEvent } from "../components/EventDetail";

const EventDetail = () => {
  const url =
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
  return (
    <View style={{ flex: 1 }}>
      <HeaderEvent />
      <Image
        style={{ height: 350, resizeMode: "cover" }}
        source={{ uri: url }}
      />
      <BodyContent>
        <Box>
          <BoldText>Hello</BoldText>
        </Box>
      </BodyContent>
    </View>
  );
};

export default EventDetail;
