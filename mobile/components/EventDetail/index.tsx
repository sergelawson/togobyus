import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, ViewProps, StyleSheet, Text } from "react-native";
import { BoldText, Box } from "../Common";
import Colors from "../../constants/Colors";
import { Events } from "../../src/models";
import useUser from "../../hooks/useUser";
import { useEffect, useState } from "react";
import RenderIf from "../RenderIf";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const BodyContent = styled.View<ViewProps>`
  background-color: #f6f6f6;
  flex: 1;
  margin-top: -50px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

type HeaderProps = {
  event: Events | undefined;
  offsetY: SharedValue<number>;
  height: number;
};

export const HeaderEvent: React.FC<HeaderProps> = ({
  event,
  offsetY,
  height,
}) => {
  const { addUserEvents, removeUserEvent, checkUserEvent } = useUser();
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  const [saved, setSaved] = useState<boolean>(false);
  useEffect(() => {
    checkStatus();
  }, [event]);

  const rStyle = useAnimatedStyle(() => {
    const bgOpacity = interpolate(offsetY.value, [0, height - 130], [0, 1]);
    return {
      backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
    };
  });

  const rStyleTitle = useAnimatedStyle(() => {
    const opacity = interpolate(
      offsetY.value,
      [height - 120, height - 70],
      [0, 1]
    );
    return { opacity: opacity };
  });

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
    console.log("evant", event);
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
    <Animated.View
      style={[
        styles.container,
        rStyle,
        { paddingTop: insets.top + 5, height: insets.top + 50 },
      ]}
    >
      <Pressable onPress={goBack}>
        <Box
          align="center"
          justify="center"
          mr={20}
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
      <Animated.Text numberOfLines={1} style={[styles.title, rStyleTitle]}>
        {event?.name}
      </Animated.Text>
      <Pressable onPress={handleSave}>
        <Box
          align="center"
          justify="center"
          ml={20}
          style={{
            backgroundColor: "#FFFFFF",
            width: 35,
            height: 35,
            borderRadius: 15,
          }}
        >
          <RenderIf condition={saved}>
            <Ionicons name="bookmark" size={22} color="black" />
          </RenderIf>
          <RenderIf condition={!saved}>
            <Ionicons name="bookmark-outline" size={22} color="black" />
          </RenderIf>
        </Box>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 99,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: Colors.light.text,
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
  },
});
