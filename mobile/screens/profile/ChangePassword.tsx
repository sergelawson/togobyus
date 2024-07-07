import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AuthInput, AuthButton } from "../../components/Auth";
import { Box, BoldText, NormalText } from "../../components/Common";

type ChangePasswordType = {
  oldPassword: string;
  password: string;
};

const ChangePassword = () => {
  const { changePassword, loading } = useAuth();

  const [formConfirm, setFormConfirm] = useState<ChangePasswordType>({
    oldPassword: "",
    password: "",
  });

  const onChangeForm = (text: string, name: string) => {
    setFormConfirm((state) => ({ ...state, [name]: text }));
  };

  const [attempt, setAttemp] = useState<number>(0);

  const onSubmitRecover = () => {
    setAttemp(1);
    changePassword(formConfirm);
  };

  return (
    <Wrapper>
      <Header hasBackButton title="Changer mot de passe" />
      <ScrollView style={{ paddingTop: 20 }}>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            onChangeText={(text) => onChangeForm(text, "oldPassword")}
            placeholder="Ancien mot de passe"
            hasError={attempt > 0 && formConfirm.oldPassword.length < 6}
            isSecure
          />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            onChangeText={(text) => onChangeForm(text, "password")}
            placeholder="Nouveau mot de pass"
            hasError={attempt > 0 && formConfirm.password.length < 8}
            isSecure
          />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton
            onPress={onSubmitRecover}
            text="Modifier"
            loading={loading}
          />
        </Box>
      </ScrollView>
    </Wrapper>
  );
};

export default ChangePassword;
