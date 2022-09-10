import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";
import { Box, FlexBox } from "./Common";
//import Colors from "../../constants/Colors";

type RenderIfProps = {
  condition: boolean;
  children: React.ReactNode;
  placeholder?: boolean;
};

const RenderIf: React.FC<RenderIfProps> = ({
  condition,
  children,
  placeholder,
}) => {
  if (placeholder && !condition) {
    return (
      <FlexBox flex={1} flexDirection="row" align="center" justify="center">
        <View style={{ flex: 1 }}>
          <ActivityIndicator size={30} color={Colors.light.primary} />
        </View>
      </FlexBox>
    );
  }
  return <>{condition && children}</>;
};

export default RenderIf;
