import { TextProps, ViewProps } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";

interface TextType extends TextProps {
  color?: string;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  pt?: number;
  margin?: number;
  padding?: number;
  size?: number;
}

type AlignItems = "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type FlexDirection = "row" | "column";

interface BoxProps extends ViewProps {
  flex?: number;
  flexDirection?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  margin?: number;
  padding?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  pt?: number;
  bg?: string;
}

export const NormalText = styled.Text<TextType>`
  font-family: "Inter_400Regular";
  color: ${(props) => props.color || Colors.light.text};
  margin: ${(props) => props.margin || 0}px;
  padding: ${(props) => props.padding || 0}px;
  font-size: ${(props) => props.size || 14}px;
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  margin-left: ${(props) => props.ml || 0}px;
  margin-right: ${(props) => props.mr || 0}px;
  padding-top: ${(props) => props.pt || 0}px;
  padding-bottom: ${(props) => props.pb || 0}px;
  padding-right: ${(props) => props.pr || 0}px;
  padding-left: ${(props) => props.pl || 0}px;
`;

export const BoldText = styled.Text<TextType>`
  font-family: "Inter_600SemiBold";
  color: ${(props) => props.color || Colors.light.text};
  font-size: ${(props) => props.size || 14}px;
  margin: ${(props) => props.margin || 0}px;
  padding: ${(props) => props.padding || 0}px;
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  margin-left: ${(props) => props.ml || 0}px;
  margin-right: ${(props) => props.mr || 0}px;
  padding-top: ${(props) => props.pt || 0}px;
  padding-bottom: ${(props) => props.pb || 0}px;
  padding-right: ${(props) => props.pr || 0}px;
  padding-left: ${(props) => props.pl || 0}px;
`;

export const FlexBox = styled.View<BoxProps>`
  flex: ${(props) => props.flex || 0};
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  margin: ${(props) => props.margin || 0}px;
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  margin-left: ${(props) => props.ml || 0}px;
  margin-right: ${(props) => props.mr || 0}px;
  padding: ${(props) => props.padding || 0}px;
  padding-top: ${(props) => props.pt || 0}px;
  padding-bottom: ${(props) => props.pb || 0}px;
  padding-right: ${(props) => props.pr || 0}px;
  padding-left: ${(props) => props.pl || 0}px;
`;

export const Box = styled.View<BoxProps>`
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  margin: ${(props) => props.margin || 0}px;
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  margin-left: ${(props) => props.ml || 0}px;
  margin-right: ${(props) => props.mr || 0}px;
  padding: ${(props) => props.padding || 0}px;
  padding-top: ${(props) => props.pt || 0}px;
  padding-bottom: ${(props) => props.pb || 0}px;
  padding-right: ${(props) => props.pr || 0}px;
  padding-left: ${(props) => props.pl || 0}px;
`;
