import { FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { UserEvent, Events } from "../../src/models";
import { useAppSelector } from "../../store";
import useEvents from "../../hooks/useEvents";
import { useNavigation } from "@react-navigation/native";
import { EventListCard } from "../../components/Home";
import { Storage } from "aws-amplify";

type EventDetailsProps = {
  id: string | null | undefined;
  image_url: string | null | undefined;
  name: string | null | undefined;
  placesID: string;
  organisersID: string;
};

const Selections = () => {
  const { user } = useAppSelector((state) => state);

  const navigation = useNavigation();

  const { getEvent } = useEvents();

  const userEvents = user?.events as UserEvent[];

  const [eventsList, setEventList] = useState<Events[] | []>([]);

  useEffect(() => {
    fetcEvents();
  }, [userEvents]);

  const fetcEvents = async () => {
    let list: Events[] | [] = [];

    for (const userEvent of userEvents) {
      try {
        let item = await getEvent(userEvent.eventsID);
        if (!item || !item.imageUrl) return;

        const imageUrl = await Storage.get(item.imageUrl);

        item = { ...item, imageUrl: imageUrl };
        list = [...list, item];
      } catch (error) {
        console.log(error);
      }
    }

    setEventList(list);
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

  return (
    <Wrapper>
      <Header hasBackButton title="Mes Séléctions" />
      <FlatList
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
        data={eventsList}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={null}
            style={{ marginBottom: index + 1 === eventsList.length ? 70 : 0 }}
          >
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
        keyExtractor={(item, index) => item.id + "_" + index.toString()}
      />
    </Wrapper>
  );
};

export default Selections;
