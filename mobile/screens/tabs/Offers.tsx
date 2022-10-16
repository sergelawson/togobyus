import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { OfferItem, OfferItemProps } from "../../components/Offres";
import { BoldText, Box, FlexBox } from "../../components/Common";
import Colors from "../../constants/Colors";

type offersDataType = {
  month: string;
  elements: OfferItemProps[];
};

const Offers = () => {
  const img_url =
    "https://images.unsplash.com/photo-1655070250185-de3e02b31017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";

  const offersData: offersDataType[] = [
    {
      month: "Juin 2022",
      elements: [
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
      ],
    },
    {
      month: "Juillet 2022",
      elements: [
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Marcelo Beach",
          location: "Baguida",
          percentage: 30,
        },
      ],
    },
  ];

  const renderOffers = ({
    item,
    index,
  }: {
    item: offersDataType;
    index: number;
  }) => {
    return (
      <FlexBox
        flexDirection="column"
        ml={30}
        mr={30}
        mb={index + 1 === offersData.length ? 70 : 0}
      >
        <BoldText color={Colors.light.primary} mb={10}>
          {item.month}
        </BoldText>
        {item?.elements?.map((element: OfferItemProps, index: number) => (
          <Pressable
            onPress={null}
            key={index.toString() + "offer"}
            style={{ width: "100%" }}
          >
            <OfferItem {...element} />
          </Pressable>
        ))}
      </FlexBox>
    );
  };

  return (
    <Wrapper>
      <Header title="Offres" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={renderOffers}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default Offers;
