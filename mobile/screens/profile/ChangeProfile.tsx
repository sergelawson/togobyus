import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { AuthInput, AuthButton } from "../../components/Auth";
import { Box } from "../../components/Common";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../store";

type ForMType = {
  email?: string;
  name: string;
};

const ChangeProfile = () => {
  const { user } = useAppSelector((state) => state);
  // @ts-ignore
  const userData = user.user as { name: string };

  const name = userData?.name;

  const [formData, setFormData] = useState<ForMType>({
    name: name,
  });

  const { updateUser, loading } = useAuth();

  const onTextChange = (text: string, field: string) => {
    setFormData((state) => ({ ...state, [field]: text }));
  };

  const [attempt, setAttemp] = useState<number>(0);

  const onUserUpdate = async () => {
    setAttemp((state) => state + 1);
    await updateUser(formData);
  };

  return (
    <Wrapper>
      <Header hasBackButton title="Modifier mon profile" />
      <ScrollView style={{ paddingTop: 20 }}>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            value={formData.name}
            hasError={attempt > 0 && formData.name.length < 2}
            placeholder="Nom complet"
            onChangeText={(text) => onTextChange(text, "name")}
          />
        </Box>
        {/*         <Box pt={15} pl={30} pr={30}>
          <AuthInput
            placeholder="Entrer votre email"
            value={formData.email}
            hasError={attempt > 0 && formData.email.length < 6}
            onChangeText={(text) => onTextChange(text, "email")}
          />
        </Box> */}
        <Box pt={30} pl={30} pr={30}>
          <AuthButton
            onPress={onUserUpdate}
            loading={loading}
            text="Modifier"
          />
        </Box>
      </ScrollView>
    </Wrapper>
  );
};

export default ChangeProfile;
