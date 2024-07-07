import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { OfferItem, OfferItemProps } from "../../components/Offres";
import { BoldText, Box, FlexBox } from "../../components/Common";
import Colors from "../../constants/Colors";
import { PromoTypes, Promos } from "../../src/models";
import usePromoType from "../../hooks/usePromoType";
import { useNavigation } from "@react-navigation/native";
import { CatButton } from "../../components/Home";
import usePromos from "../../hooks/usePromo";

const Offers = () => {
  const categoriesTypes: PromoTypes[] = [
    {
      id: "all",
      name: "Tout",
    },
  ];

  const { promos: promosTypes, loading: loadingTypes } = usePromoType();
  const { promos, loading } = usePromos();

  // const navigation = useNavigation();

  const [page, setPage] = useState<number>(1);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleSetCategorie = (categorie: string) => {
    setPage(1);
    setActiveCategory(categorie);
  };

  const ListHeader = (
    <Box mt={5} mb={20}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[...categoriesTypes, ...promosTypes]}
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
  );

  return (
    <Wrapper>
      <Header title="Offres" />
      <FlatList
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        data={promos}
        renderItem={({ item }) => (
          <OfferItem
            id={item.id}
            imageUrl={item.imageUrl}
            start_date={item.start_date}
            name={item.name}
            promo_amount={item.promo_amount}
            amount={item.amount}
            end_date={item.end_date}
            placesID={item.placesID}
            description={item.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default Offers;
