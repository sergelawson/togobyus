import {
  TextInputProps,
  KeyboardAvoidingView,
  Pressable,
  PressableProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { BoldText, Box } from "../Common";
import { ActivityIndicator } from "react-native";
import RenderIf from "../RenderIf";
import React, { useState } from "react";

interface AuthButtonProps extends PressableProps {
  text: string;
  loading?: boolean;
}

interface AuthInputProps extends TextInputProps {
  isSecure?: boolean;
}

export const AuthInputComponent = styled.TextInput<AuthInputProps>`
  background-color: ${Colors.light.light};
  font-size: 17px;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
`;

const AuthButtonStyle = styled.View`
  background-color: ${Colors.light.primary};
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const GoogleButtonStyle = styled.View`
  background-color: ${Colors.light.danger};
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  loading,
  ...rest
}) => {
  return (
    <Pressable {...rest} disabled={loading} style={{ width: "100%" }}>
      <AuthButtonStyle>
        <RenderIf condition={!loading}>
          <BoldText color={Colors.light.light} size={16}>
            {text}
          </BoldText>
        </RenderIf>
        <RenderIf condition={loading || false}>
          <ActivityIndicator color={Colors.light.light} />
        </RenderIf>
      </AuthButtonStyle>
    </Pressable>
  );
};

export const GoogleAuthButton: React.FC<AuthButtonProps> = ({
  text,
  loading,
  ...rest
}) => {
  return (
    <Pressable {...rest} disabled={loading} style={{ width: "100%" }}>
      <GoogleButtonStyle>
        <RenderIf condition={!loading}>
          <Ionicons
            name="ios-logo-google"
            size={24}
            color={Colors.light.light}
          />
          <BoldText ml={5} color={Colors.light.light} size={16}>
            {text}
          </BoldText>
        </RenderIf>
        <RenderIf condition={loading || false}>
          <ActivityIndicator color={Colors.light.light} />
        </RenderIf>
      </GoogleButtonStyle>
    </Pressable>
  );
};

export const AuthInput: React.FC<AuthInputProps> = ({ isSecure, ...rest }) => {
  const [showText, setShowText] = useState(true);

  const toggleShowText = () => setShowText((state) => !state);
  if (!isSecure) {
    return (
      <>
        {/**  @ts-ignore */}
        <AuthInputComponent
          placeholderTextColor={Colors.light.secondary}
          {...rest}
        />
      </>
    );
  }
  return (
    <Box flexDirection="row" align="center">
      {/** @ts-ignore */}
      <AuthInputComponent
        placeholderTextColor={Colors.light.secondary}
        style={{ paddingRight: 38 }}
        secureTextEntry={showText}
        {...rest}
      />
      <Pressable
        onPress={toggleShowText}
        style={{
          marginLeft: -35,
        }}
      >
        {showText ? (
          <Ionicons name="eye-off" size={24} color="black" />
        ) : (
          <Ionicons name="eye" size={24} color="black" />
        )}
      </Pressable>
    </Box>
  );

  return <></>;
};
