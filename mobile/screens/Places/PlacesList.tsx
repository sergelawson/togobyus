import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import RenderIf from "../../components/RenderIf";
import usePlaces from "../../hooks/usePlaces";
import PlaceListCard from "../../components/Places/PlaceListCard";

type ParamsType = {
  PlacesList: {
    id: string;
    name: string;
  };
};
type ListDetailsProps = {
  id: string | null | undefined;
  image_url: string | null | undefined;
  name: string | null | undefined;
};
const PlacesList = () => {
  const { params } = useRoute<RouteProp<ParamsType, "PlacesList">>();
  const { loading, places, fetchPlacesByType } = usePlaces({
    initialFetch: false,
  });

  useEffect(() => {
    fetchPlacesByType(params.id);
  }, []);

  const navigation = useNavigation();

  const goToPlacesDetails = ({ id, image_url, name }: ListDetailsProps) => {
    // @ts-ignore
    navigation.navigate("PlaceDetail", {
      id,
      image_url,
      name,
    });
  };

  return (
    <Wrapper>
      <Header title={params.name} hasBackButton />
      <RenderIf condition={!loading}>
        <FlatList
          contentContainerStyle={{ paddingTop: 15 }}
          data={places}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={null}
              style={{ marginBottom: index + 1 === places.length ? 70 : 0 }}
            >
              {/** @ts-ignore */}
              <PlaceListCard
                id={item.id}
                image_url={item.imageUrl}
                name={item.name}
                city={item.city}
                type={item.address}
                onPress={goToPlacesDetails}
              />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </RenderIf>
    </Wrapper>
  );
};

export default PlacesList;
