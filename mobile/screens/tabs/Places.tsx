import { FlatList } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import PlaceCategory from "../../components/Places/PlaceCategory";
import { PlacesCat } from "../../constants/PlacesType";
import { useNavigation } from "@react-navigation/native";

const Notifications: React.FC = () => {
  const navigation = useNavigation();

  const goToPlacesList = (id: string, name: string) => {
    //@ts-ignore
    navigation.navigate("PlacesList", { id: id, name: name });
  };
  return (
    <Wrapper>
      <Header title="Explorer" />
      <FlatList
        contentContainerStyle={{ marginHorizontal: 20, marginTop: 20 }}
        numColumns={2}
        data={PlacesCat}
        renderItem={({ item, index }) => (
          <PlaceCategory
            onPress={() => goToPlacesList(item.id, item.name)}
            name={item.name}
            imageSrc={item.imgSrc}
            itemIndex={index}
          />
        )}
        keyExtractor={(item, index) => item.name}
      />
    </Wrapper>
  );
};

export default Notifications;
