import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import { SearchBarSearch } from "../components/Home";
import { FlatList, Pressable, Image } from "react-native";
import { BoldText, Box, FlexBox, NormalText } from "../components/Common";
import { ButtonCall, EventListCard, SearchBar } from "../components/Home";
import Colors from "../constants/Colors";
import { CatButton, CatProps, EventCard } from "../components/Home";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../store";
import useEvents from "../hooks/useEvents";
import useEventsType from "../hooks/useEventsType";
import RenderIf from "../components/RenderIf";
import { EventTypes } from "../src/models";

type EventDetailsProps = {
  id: string | null | undefined;
  image_url: string | null | undefined;
  name: string | null | undefined;
  placesID: string;
  organisersID: string;
};

const Search = () => {
  const categoriesTypes: EventTypes[] = [
    {
      id: "all",
      name: "Tout",
    },
  ];

  const { user } = useAppSelector((state) => state);
  const navigation = useNavigation();
  const { events, loading, moreSearchEvents, fetchSearchEvents } = useEvents();

  const { events: eventTypes, loading: loadingTypes } = useEventsType();

  const [page, setPage] = useState<number>(1);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const [keyword, setKeyword] = useState<string>("");

  const handleTextChange = (text: string) => {
    setKeyword(text);
  };

  const handleSetCategorie = (categorie: string) => {
    setPage(1);
    setActiveCategory(categorie);
  };

  useEffect(() => {
    fetchSearchEvents({ keyword, categorie: activeCategory });
  }, [activeCategory, keyword]);

  const fetchMoreEvents = async () => {
    const count = await moreSearchEvents({
      keyword,
      page,
      categorie: activeCategory,
    });
    if (count) {
      setPage((state) => state + 1);
    }
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
      {/** Search Bar Section */}

      <Box mt={15} pl={30} pr={30} mb={15} flexDirection="row">
        <SearchBarSearch onChangeText={handleTextChange} />
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
                handleSetCategorie(item.id);
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
    </>
  );

  return (
    <Wrapper>
      <Header title="Recherche" hasBackButton />
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
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreEvents}
      />
    </Wrapper>
  );
};

export default Search;
