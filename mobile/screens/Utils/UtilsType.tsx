import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import useUtilsType from "../../hooks/useUtilsType";
import UtilsListElement from "../../components/Utils/UtilsListElement";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RenderIf from "../../components/RenderIf";

const UtilsType = () => {
  const { utils: utilsType, loading } = useUtilsType();
  const navigation = useNavigation();

  const goToUtil = (id: string, name: string) => {
    //@ts-ignore
    navigation.navigate("Utils", { id: id, name: name });
  };

  return (
    <Wrapper>
      <Header hasBackButton title="Catégories" />
      <RenderIf placeholder={true} condition={!loading}>
        <FlatList
          contentContainerStyle={{ paddingTop: 20 }}
          data={utilsType}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => (
            <UtilsListElement
              name={item.name}
              id={item.id}
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
              onPress={goToUtil}
            />
          )}
        />
      </RenderIf>
    </Wrapper>
  );
};

export default UtilsType;

const styles = StyleSheet.create({});
