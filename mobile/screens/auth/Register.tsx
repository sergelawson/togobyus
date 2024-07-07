import { ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Box, NormalText, BoldText } from "../../components/Common";
import { AuthButton, AuthInput, GoogleAuthButton } from "../../components/Auth";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useAuth from "../../hooks/useAuth";

type ForMType = {
  email: string;
  password: string;
  fullName: string;
};

const Register = () => {
  const [formData, setFormData] = useState<ForMType>({
    email: "",
    password: "",
    fullName: "",
  });

  const { signUp, loading } = useAuth();

  const onTextChange = (text: string, field: string) => {
    setFormData((state) => ({ ...state, [field]: text }));
  };

  const [attempt, setAttemp] = useState<number>(0);

  const onSignUp = async () => {
    setAttemp((state) => state + 1);
    await signUp(formData);
  };
  return (
    <Wrapper>
      <Header hasBackButton />
      <KeyboardAwareScrollView bounces={false}>
        <Box justify="center" align="center">
          <Image style={{ width: 150, height: 40 }} source={logo} />
        </Box>
        <Box align="center" pt={30} pl={30} pr={30}>
          <BoldText size={20}>Créer un compte</BoldText>
          <NormalText
            style={{ textAlign: "center" }}
            size={16}
            color={Colors.light.secondary}
            mt={10}
          >
            Allez-y et découvrez ce qui est passe actuellement à Lomé.
          </NormalText>
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            value={formData.fullName}
            hasError={attempt > 0 && formData.fullName.length < 2}
            placeholder="Entrer votre nom complet"
            onChangeText={(text) => onTextChange(text, "fullName")}
          />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            placeholder="Entrer votre email"
            value={formData.email}
            hasError={attempt > 0 && formData.email.length < 6}
            onChangeText={(text) => onTextChange(text, "email")}
          />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            isSecure
            value={formData.password}
            hasError={attempt > 0 && formData.password.length < 6}
            placeholder="Entrer votre mot de passe"
            onChangeText={(text) => onTextChange(text, "password")}
          />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton onPress={onSignUp} loading={loading} text="S'inscrire" />
        </Box>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Register;
