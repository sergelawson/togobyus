import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BoldText, Box, FlexBox, NormalText } from "../components/Common";
import { BodyContent, HeaderEvent } from "../components/EventDetail";
import Colors from "../constants/Colors";

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
          <BoldText numberOfLines={1} size={19}>
            Concert Toofan Miadjoe
          </BoldText>
        </Box>
        <Box flexDirection="row" mt={10}>
          <Box>
            <NormalText>Miajoe Aného</NormalText>
          </Box>
          <Box ml={20}>
            <TouchableOpacity>
              <BoldText color={Colors.light.primary}>S'abonner</BoldText>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box flexDirection="row" justify="center" mt={30}>
          <Box mr={5}>
            <TouchableOpacity
              style={{
                padding: 15,
                borderWidth: 1,
                borderColor: Colors.light.primary,
                borderRadius: 25,
              }}
            >
              <BoldText numberOfLines={1} color={Colors.light.primary}>
                Je Participe
              </BoldText>
            </TouchableOpacity>
          </Box>
          <Box ml={5}>
            <TouchableOpacity
              style={{
                padding: 15,
                borderWidth: 1,
                borderColor: Colors.light.primary,
                backgroundColor: Colors.light.primary,
                borderRadius: 25,
              }}
            >
              <BoldText numberOfLines={1} color={"#FFFFFF"}>
                Contacter
              </BoldText>
            </TouchableOpacity>
          </Box>
        </Box>
      </BodyContent>
    </View>
  );
};

export default EventDetail;
