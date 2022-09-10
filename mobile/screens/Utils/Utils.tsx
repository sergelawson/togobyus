import { FlatList, Linking, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import useUtils from "../../hooks/useUtils";
import UtilsListElement from "../../components/Utils/UtilsListElement";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import RenderIf from "../../components/RenderIf";

type ParamsType = {
  Utils: {
    id: string;
    name: string;
  };
};
const Utils = () => {
  const { params } = useRoute<RouteProp<ParamsType, "Utils">>();
  const { getUtilsByType, loading, utils } = useUtils();

  useEffect(() => {
    getUtilsByType(params.id);
  }, []);

  return (
    <Wrapper>
      <Header hasBackButton title={params.name} />
      <RenderIf condition={!loading} placeholder={true}>
        <FlatList
          contentContainerStyle={{ paddingTop: 20 }}
          data={utils}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => (
            <UtilsListElement
              name={item.name}
              id={item.id}
              onPress={() =>
                item?.contact ? Linking.openURL(`tel:${item?.contact}`) : null
              }
              icon={
                <Ionicons
                  name="call-outline"
                  color={Colors.light.primary}
                  size={24}
                />
              }
              end={
                <Ionicons
                  name="chevron-forward-outline"
                  color={Colors.light.primary}
                  size={24}
                />
              }
            />
          )}
        />
      </RenderIf>
    </Wrapper>
  );
};

export default Utils;

const styles = StyleSheet.create({});
