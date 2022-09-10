import { TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Box, FlexBox, NormalText } from "../Common";

export type UtilsListProps = {
  icon: React.ReactNode;
  name: string | undefined | null;
  id: string;
  contact?: string;
  onPress?: (id: string, name: string) => void;
  end?: React.ReactNode;
};

const UtilsListElement: React.FC<UtilsListProps> = ({
  icon,
  name,
  id,
  end,
  onPress,
}) => {
  const handlePress = () => {
    if (id && name && typeof onPress === "function") {
      onPress(id, name);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Box
        style={{ backgroundColor: "#FFFFFF", borderRadius: 10 }}
        pl={13}
        pr={13}
        pt={13}
        pb={13}
        ml={30}
        mr={30}
        mb={12}
        flexDirection="row"
        align="center"
      >
        <Box mr={15}>{icon}</Box>
        <FlexBox flex={1}>
          <NormalText size={16}>{name}</NormalText>
        </FlexBox>
        <Box>{end}</Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default UtilsListElement;
