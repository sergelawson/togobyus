import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, ViewProps, ScrollViewProps } from "react-native";
import { Box } from "../Common";
import Colors from "../../constants/Colors";

const HeaderContainer = styled.View<ViewProps>`
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 99;
  justify-content: space-between;
`;

export const BodyContent = styled.View<ViewProps>`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #f6f6f6;
  flex: 1;
  margin-top: -50px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const HeaderEvent = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  const goBack = () => {
    navigate.goBack();
  };

  return (
    <HeaderContainer style={{ height: insets.top + 50 }}>
      <Pressable onPress={goBack}>
        <Box
          mt={insets.top + 5}
          align="center"
          justify="center"
          style={{
            backgroundColor: "#FFFFFF",
            width: 35,
            height: 35,
            borderRadius: 15,
          }}
        >
          <Ionicons
            color={Colors.light.text}
            name="arrow-back-sharp"
            size={24}
          />
        </Box>
      </Pressable>
      <Pressable onPress={goBack}>
        <Box
          mt={insets.top + 5}
          align="center"
          justify="center"
          style={{
            backgroundColor: "#FFFFFF",
            width: 35,
            height: 35,
            borderRadius: 15,
          }}
        >
          <Ionicons name="bookmark-outline" size={22} color="black" />
        </Box>
      </Pressable>
    </HeaderContainer>
  );
};
