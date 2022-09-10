import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";
import { Box, FlexBox } from "./Common";
//import Colors from "../../constants/Colors";

type LoadingContentProps = {
  condition: boolean;
  placeholder: React.ReactNode;
  children: React.ReactNode;
};

const LoadingContent: React.FC<LoadingContentProps> = ({
  condition,
  children,
  placeholder,
}) => {
  if (placeholder && condition) {
    return <>{placeholder}</>;
  }
  return <>{children}</>;
};

export default LoadingContent;
