import { FlatList, Image, ImageSourcePropType } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { NotifyItem, NotifyItemProps } from "../../components/Notifications";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import Colors from "../../constants/Colors";
import PlaceCategory from "../../components/Places/PlaceCategory";

type PlaceCatType = {
  name: string;
  imgSrc: ImageSourcePropType;
  onPress: () => void;
};

const PlacesCat: PlaceCatType[] = [
  {
    name: "Hôtel",
    imgSrc: require("../../assets/images/explore/hotel.png"),
    onPress: () => null,
  },
  {
    name: "Night Club",
    imgSrc: require("../../assets/images/explore/night-club.png"),
    onPress: () => null,
  },
  {
    name: "Bar & Resto",
    imgSrc: require("../../assets/images/explore/dinner-table.png"),
    onPress: () => null,
  },
  {
    name: "Shopping",
    imgSrc: require("../../assets/images/explore/shopping-cart.png"),
    onPress: () => null,
  },
  {
    name: "Plage",
    imgSrc: require("../../assets/images/explore/beach.png"),
    onPress: () => null,
  },
  {
    name: "Cinéma",
    imgSrc: require("../../assets/images/explore/cinema.png"),
    onPress: () => null,
  },
  {
    name: "Art & Culture",
    imgSrc: require("../../assets/images/explore/ceramics.png"),
    onPress: () => null,
  },
  {
    name: "Sport",
    imgSrc: require("../../assets/images/explore/dumbbell.png"),
    onPress: () => null,
  },
  {
    name: "Nature",
    imgSrc: require("../../assets/images/explore/waterfall.png"),
    onPress: () => null,
  },
  {
    name: "Loisir",
    imgSrc: require("../../assets/images/explore/puzzle.png"),
    onPress: () => null,
  },
  {
    name: "Activité",
    imgSrc: require("../../assets/images/explore/group.png"),
    onPress: () => null,
  },
  {
    name: "Autre",
    imgSrc: require("../../assets/images/explore/room.png"),
    onPress: () => null,
  },
];

const Notifications: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Explorer" />
      <FlatList
        contentContainerStyle={{ marginHorizontal: 20, marginTop: 20 }}
        numColumns={2}
        data={PlacesCat}
        renderItem={({ item, index }) => (
          <PlaceCategory
            name={item.name}
            imageSrc={item.imgSrc}
            onPress={item.onPress}
            itemIndex={index}
          />
        )}
        keyExtractor={(item, index) => item.name}
      />
    </Wrapper>
  );
};

export default Notifications;
