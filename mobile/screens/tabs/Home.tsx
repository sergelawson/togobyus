import { FlatList, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import { ButtonCall, EventListCard, SearchBar } from "../../components/Home";
import Colors from "../../constants/Colors";
import {
  CatButton,
  CatProps,
  EventCard,
  EventCardProps,
} from "../../components/Home";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";

const Home = () => {
  const categoriesTypes: CatProps[] = [
    {
      type: "all",
      title: "Tout",
      icon: "infinite",
    },
    {
      type: "events",
      title: "Évènements",
      icon: "calendar",
    },
    {
      type: "restaurant",
      title: "Restaurant",
      icon: "fast-food",
    },
  ];

  const events: EventCardProps[] = [
    {
      image_url:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: new Date().toDateString(),
      name: "Concert Toofan Miadjo",
      location: "Aného",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: new Date().toDateString(),
      name: "Concert Toofan Miadjo",
      location: "Aného",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: new Date().toDateString(),
      name: "Concert Toofan Miadjo",
      location: "Aného",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: new Date().toDateString(),
      name: "Concert Toofan Miadjo",
      location: "Aného",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: new Date().toDateString(),
      name: "Concert Toofan Miadjo",
      location: "Aného",
    },
  ];

  const ListHeader = (
    <>
      <Box pl={30} pr={30} mb={15}>
        {/** Header Sectiom: Name and Phone Button */}
        <Box flexDirection="row" align="center" mt={15}>
          <FlexBox flex={1}>
            <NormalText mb={5} color={Colors.light.secondary}>
              Bonjour
            </NormalText>
            <BoldText size={20}>Black Panther</BoldText>
          </FlexBox>
          <FlexBox flex={1} align="flex-end" justify="center">
            <ButtonCall />
          </FlexBox>
        </Box>

        {/** Search Bar Section */}

        <Box mt={15} flexDirection="row">
          <SearchBar />
        </Box>
      </Box>

      {/** Cetegory Tabs Button */}

      <Box pl={30} pr={30} mb={20}>
        <BoldText size={15}>Catégories</BoldText>
      </Box>

      <Box mb={20}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categoriesTypes}
          keyExtractor={(item, index) => item?.type}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ marginLeft: index === 0 ? 30 : 0 }}
              onPress={() => {
                setActiveCategory(item.type);
              }}
            >
              <CatButton
                active={item.type === activeCategory}
                type={item?.type}
                title={item?.title}
                icon={item.icon}
              />
            </Pressable>
          )}
        />
      </Box>

      {/** Week events */}

      <Box
        pl={30}
        pr={30}
        mb={20}
        flexDirection="row"
        justify="space-between"
        align="center"
      >
        <BoldText size={15}>Au programme cette semaine</BoldText>
        <NormalText size={14} color={Colors.light.primary}>
          Voir plus
        </NormalText>
      </Box>
      <Box mb={20}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={events}
          keyExtractor={(item, index) => index.toString() + "_envents"}
          renderItem={({ item, index }) => (
            <Pressable style={{ marginLeft: index === 0 ? 30 : 0 }}>
              <EventCard {...item} />
            </Pressable>
          )}
        />
      </Box>
      <Box
        pl={30}
        pr={30}
        mb={20}
        flexDirection="row"
        justify="space-between"
        align="center"
      >
        <BoldText size={15}>Nos top sellers</BoldText>
        <NormalText size={14} color={Colors.light.primary}>
          Voir plus
        </NormalText>
      </Box>
    </>
  );

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Wrapper>
      <Header
        image={<Image source={logo} style={{ width: 120, height: 35 }} />}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        data={events}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={null}
            style={{ marginBottom: index + 1 === events.length ? 70 : 0 }}
          >
            {/** @ts-ignore */}
            <EventListCard {...item} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default Home;
