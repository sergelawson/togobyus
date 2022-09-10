import { FlatList, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import { ButtonCall, EventListCard, SearchBar } from "../../components/Home";
import Colors from "../../constants/Colors";
import { CatButton, CatProps, EventCard } from "../../components/Home";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store";
import useEvents from "../../hooks/useEvents";
import useEventsType from "../../hooks/useEventsType";
import RenderIf from "../../components/RenderIf";
import { EventTypes } from "../../src/models";

type EventDetailsProps = {
  id: string | null | undefined;
  image_url: string | null | undefined;
  name: string | null | undefined;
  placesID: string;
  organisersID: string;
};

const Home = () => {
  const categoriesTypes: EventTypes[] = [
    {
      id: "all",
      name: "Tout",
    },
  ];

  const { user } = useAppSelector((state) => state);
  const userData = user.user;
  const navigation = useNavigation();
  const { events, loading } = useEvents();

  const { events: eventTypes, loading: loadingTypes } = useEventsType();

  const goToSearch = () => {
    // @ts-ignore
    navigation.navigate("Search");
  };
  const goToUtils = () => {
    // @ts-ignore
    navigation.navigate("UtilsType");
  };
  const goToEventDetail = ({
    id,
    image_url,
    name,
    placesID,
    organisersID,
  }: EventDetailsProps) => {
    // @ts-ignore
    navigation.navigate("EventDetail", {
      id,
      image_url,
      name,
      placesID,
      organisersID,
    });
  };

  const ListHeader = (
    <>
      <Box pl={30} pr={30} mb={15}>
        {/** Header Sectiom: Name and Phone Button */}
        <Box flexDirection="row" align="center" mt={15}>
          <FlexBox flex={1}>
            <NormalText mb={5} color={Colors.light.secondary}>
              Bonjour
            </NormalText>
            <BoldText numberOfLines={1} size={20}>
              {userData?.name}
            </BoldText>
          </FlexBox>
          <FlexBox flex={1} align="flex-end" justify="center">
            <Pressable onPress={goToUtils}>
              <ButtonCall />
            </Pressable>
          </FlexBox>
        </Box>

        {/** Search Bar Section */}

        <Box mt={15} flexDirection="row">
          <SearchBar onPress={goToSearch} />
        </Box>
      </Box>

      {/** Cetegory Tabs Button */}

      <Box mt={5} mb={20}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[...categoriesTypes, ...eventTypes]}
          keyExtractor={(item, index) => item?.id}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ marginLeft: index === 0 ? 30 : 0 }}
              onPress={() => {
                setActiveCategory(item.id);
              }}
            >
              <CatButton
                active={item.id === activeCategory}
                type={item?.id}
                title={item?.name}
                icon={index === 0 ? "infinite" : undefined}
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
        <BoldText size={15}>💫 Au programme cette semaine</BoldText>
        <NormalText size={14} color={Colors.light.primary}>
          Voir plus
        </NormalText>
      </Box>
      <Box mb={20}>
        <RenderIf condition={!loading} placeholder={true}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={events}
            keyExtractor={(item, index) => index.toString() + "_envents"}
            renderItem={({ item, index }) => (
              <Box ml={index === 0 ? 30 : 0}>
                <EventCard
                  id={item.id}
                  image_url={item.imageUrl}
                  name={item.name}
                  location={item.placesID}
                  date={item.date}
                  placesID={item.placesID}
                  organisersID={item.organisersID}
                  onPress={goToEventDetail}
                />
              </Box>
            )}
          />
        </RenderIf>
      </Box>
      <Box
        pl={30}
        pr={30}
        mb={20}
        flexDirection="row"
        justify="space-between"
        align="center"
      >
        <BoldText size={15}>🔥 En vedette</BoldText>
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
            <EventListCard
              id={item.id}
              image_url={item.imageUrl}
              name={item.name}
              location={item.placesID}
              date={item.date}
              placesID={item.placesID}
              organisersID={item.organisersID}
              onPress={goToEventDetail}
            />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default Home;
