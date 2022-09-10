import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

const Search = () => {
  return (
    <Wrapper>
      <Header title="Recherche" hasBackButton />
    </Wrapper>
  );
};

export default Search;

const styles = StyleSheet.create({});
