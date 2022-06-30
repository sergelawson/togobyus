import { View, Text, ViewProps } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { NormalText } from "../Common";
import { Ionicons } from "@expo/vector-icons";

type CatIconType = "infinite" | "fast-food" | "calendar";

export type CatProps = {
  type: string;
  title: string;
  icon: CatIconType;
  active?: boolean;
};
interface CatButtonContainerProps extends ViewProps {
  active?: boolean;
}
const CatButtonContainer = styled.View<CatButtonContainerProps>`
  background-color: ${(props) =>
    props.active ? Colors.light.primary : "#FFFFFF"};
  padding: 10px;
  margin-right: 10px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CatButton: React.FC<CatProps> = ({ type, title, icon, active }) => {
  return (
    <CatButtonContainer active={active}>
      <Ionicons
        name={icon}
        size={18}
        color={active ? Colors.light.light : Colors.light.secondary_light}
      />
      <NormalText
        ml={5}
        color={active ? Colors.light.light : Colors.light.secondary_light}
      >
        {title}
      </NormalText>
    </CatButtonContainer>
  );
};

export default CatButton;
