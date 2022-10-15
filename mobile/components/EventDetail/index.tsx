import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, ViewProps, ScrollViewProps } from "react-native";
import { Box } from "../Common";
import Colors from "../../constants/Colors";
import { Events } from "../../src/models";
import useUser from "../../hooks/useUser";
import { useEffect, useState } from "react";
import RenderIf from "../RenderIf";

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

type HeaderProps = {
  event: Events | undefined;
};

export const HeaderEvent: React.FC<HeaderProps> = ({ event }) => {
  const { addUserEvents, removeUserEvent, checkUserEvent } = useUser();
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  const [saved, setSaved] = useState<boolean>(false);
  useEffect(() => {
    checkStatus();
  }, [event]);

  const checkStatus = async () => {
    if (!event) return;
    const status = await checkUserEvent(event.id);
    if (status) {
      setSaved(true);
    }
  };
  const goBack = () => {
    navigate.goBack();
  };

  const onUserAddEvent = async () => {
    if (!event) return;
    const result = await addUserEvents(event);
    if (result) {
      setSaved(true);
    }
  };

  const onRemoveUserEvent = async () => {
    if (!event) return;
    const result = await removeUserEvent(event.id);

    if (result) {
      setSaved(false);
    }
  };

  const handleSave = () => {
    if (saved) {
      onRemoveUserEvent();
      return;
    }
    onUserAddEvent();
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
      <Pressable onPress={handleSave}>
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
          <RenderIf condition={saved}>
            <Ionicons name="bookmark" size={22} color="black" />{" "}
          </RenderIf>
          <RenderIf condition={!saved}>
            <Ionicons name="bookmark-outline" size={22} color="black" />{" "}
          </RenderIf>
        </Box>
      </Pressable>
    </HeaderContainer>
  );
};
