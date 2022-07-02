import { View, Text } from "react-native";
import React from "react";

type RenderIfProps = {
  condition: boolean;
  children: React.ReactNode;
};

const RenderIf: React.FC<RenderIfProps> = ({ condition, children }) => {
  return <>{condition && children}</>;
};

export default RenderIf;
