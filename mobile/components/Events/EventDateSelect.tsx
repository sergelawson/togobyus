import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import useDateFilter from "../../hooks/useDateFilter";
import { BoldText, Box, FlexBox, NormalText } from "../Common";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const DaySelectContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ControlContainer = styled.Pressable`
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

type DaySelectType = {
  day: string;
  weekday: string;
  active: boolean;
  onPress: () => void;
};

const DaySelect: React.FC<DaySelectType> = ({
  day,
  weekday,
  active,
  onPress,
}) => {
  return (
    <DaySelectContainer onPress={onPress}>
      <NormalText
        color={active ? Colors.light.primary : Colors.light.text}
        size={10}
      >
        {weekday}
      </NormalText>
      <BoldText color={active ? Colors.light.primary : Colors.light.text}>
        {day}
      </BoldText>
    </DaySelectContainer>
  );
};
//const
const EventDateSelect = () => {
  const {
    getSelectedMonth,
    setSelectedDate,
    selectedDate,
    dateList,
    nextDate,
    previousDate,
  } = useDateFilter();

  return (
    <>
      <Box align="center" mb={10}>
        <NormalText>{getSelectedMonth()}</NormalText>
      </Box>
      <Box flexDirection="row">
        <ControlContainer onPress={previousDate}>
          <Ionicons name="chevron-back-sharp" size={24} />
        </ControlContainer>
        {dateList.map((dataObject, index) => (
          <DaySelect
            key={dataObject.date.toString()}
            onPress={() => setSelectedDate(dataObject)}
            active={selectedDate.weekday === dataObject.weekday}
            day={dataObject.day}
            weekday={dataObject.weekday}
          />
        ))}
        <ControlContainer onPress={nextDate}>
          <Ionicons name="chevron-forward-sharp" size={24} />
        </ControlContainer>
      </Box>
    </>
  );
};

export default EventDateSelect;

const styles = StyleSheet.create({});
