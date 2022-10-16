import {
  View,
  Text,
  ViewProps,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box, FlexBox, NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";
import { placeholder_blank_green } from "../../constants/Images";

export type OrgCardProps = {
  id: string;
  image_url: string | null | undefined;
  date: string | null | undefined;
  name: string | null | undefined;
  onRemove: () => void;
};

const CardContainer = styled.View<ViewProps>`
  background-color: ${Colors.light.light};
  border-radius: 10px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const CardInner = styled.View<ViewProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  flex: 1;
`;

const OrgListCard: React.FC<OrgCardProps> = ({ image_url, name, onRemove }) => {
  const [image, setImage] = useState<string | undefined | null>(image_url);

  return (
    <Pressable>
      <CardContainer>
        <Image
          style={{
            borderRadius: 5,
            width: 60,
            height: 50,
            resizeMode: "cover",
          }}
          uri={image || placeholder_blank_green}
          preview={{ uri: placeholder_blank_green }}
        />
        <CardInner>
          <BoldText numberOfLines={1} size={16}>
            {name}
          </BoldText>
          <TouchableOpacity onPress={onRemove}>
            <Ionicons
              name="remove-circle-outline"
              size={24}
              color={Colors.light.danger}
            />
          </TouchableOpacity>
        </CardInner>
      </CardContainer>
    </Pressable>
  );
};

export default OrgListCard;
