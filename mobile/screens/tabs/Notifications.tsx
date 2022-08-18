import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { NotifyItem, NotifyItemProps } from "../../components/Notifications";
import { BoldText, FlexBox } from "../../components/Common";
import Colors from "../../constants/Colors";

type NotifyDataType = {
  month: string;
  elements: NotifyItemProps[];
};

const Notifications = () => {
  const img_url =
    "https://images.unsplash.com/photo-1655161761521-fe56e68de7ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  const notifyData: NotifyDataType[] = [
    {
      month: "Juin 2022",
      elements: [
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Lomé Chill",
          location: "Baguida",
          price: 3000,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Lomé Chill",
          location: "Baguida",
          price: 15000,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Lomé Chill",
          location: "Baguida",
          price: 10000,
        },
      ],
    },
    {
      month: "Juillet 2022",
      elements: [
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Lomé Chill",
          location: "Baguida",
          price: 3000,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Lomé Chill",
          location: "Baguida",
          price: 2000,
        },
        {
          image_url: img_url,
          date: new Date().toDateString(),
          name: "Lomé Chill",
          location: "Baguida",
          price: 5000,
        },
      ],
    },
  ];

  const renderItem = ({
    item,
    index,
  }: {
    item: NotifyDataType;
    index: number;
  }) => {
    return (
      <FlexBox
        flexDirection="column"
        ml={30}
        mr={30}
        mb={index + 1 === notifyData.length ? 70 : 0}
      >
        <BoldText color={Colors.light.primary} mb={10}>
          {item.month}
        </BoldText>
        {item?.elements?.map((element: NotifyItemProps, index: number) => (
          <Pressable
            onPress={null}
            key={index.toString() + "offer"}
            style={{ width: "100%" }}
          >
            <NotifyItem {...element} />
          </Pressable>
        ))}
      </FlexBox>
    );
  };

  return (
    <Wrapper>
      <Header title="Notifications" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notifyData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
