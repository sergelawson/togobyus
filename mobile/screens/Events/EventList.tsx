import { Pressable, Text, FlatList } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { EventDateSelect } from "../../components/Events";
import useEvents from "../../hooks/useEvents";
import RenderIf from "../../components/RenderIf";
import { EventListCard } from "../../components/Home";
import { useNavigation } from "@react-navigation/native";
import { EventDetailsProps } from "../tabs/Home";
const EventList = () => {
  const { events, loading, fetchEventsByDate } = useEvents();
  const navigation = useNavigation();
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

  return (
    <Wrapper>
      <Header title="Évènements" hasBackButton />
      <EventDateSelect getEvents={fetchEventsByDate} />
      <RenderIf condition={!loading} placeholder>
        <FlatList
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
          keyExtractor={(item, index) => item.id}
        />
      </RenderIf>
    </Wrapper>
  );
};

export default EventList;
