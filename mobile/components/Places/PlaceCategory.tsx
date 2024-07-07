import { Pressable, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Box, NormalText } from "../Common";

type PlaceCategoryType = {
  name: string;
  imageSrc: ImageSourcePropType;
  itemIndex: number;
  onPress: () => void;
};

const PlaceCategory: React.FC<PlaceCategoryType> = ({
  imageSrc,
  name,
  itemIndex,
  onPress,
}) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onPress}>
      <Box
        flex={1}
        ml={itemIndex % 2 === 0 ? 10 : 0}
        mr={10}
        pt={10}
        pb={10}
        mb={10}
        style={{ backgroundColor: "#fff", borderRadius: 8 }}
        align="center"
      >
        <Image
          style={{ width: 30, height: 30, marginBottom: 5 }}
          source={imageSrc}
        />
        <NormalText numberOfLines={1}>{name}</NormalText>
      </Box>
    </Pressable>
  );
};

export default PlaceCategory;
