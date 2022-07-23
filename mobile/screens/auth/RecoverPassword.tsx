import { Image } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Box, NormalText, BoldText } from "../../components/Common";
import { AuthButton, AuthInput } from "../../components/Auth";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useAuth from "../../hooks/useAuth";
import RenderIf from "../../components/RenderIf";

type RecoverType = {
  email: string;
  confirmation: string;
  password: string;
};

const RecoverPassword = () => {
  const { recover, recoverSubmit, isConfrim, loading } = useAuth();

  const [email, setEmail] = useState<string>("");

  const [formConfirm, setFormConfirm] = useState<RecoverType>({
    email: "",
    confirmation: "",
    password: "",
  });

  const [attempt, setAttemp] = useState<number>(0);

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangeForm = (text: string, name: string) => {
    setFormConfirm((state) => ({ ...state, [name]: text }));
  };

  const onRecover = async () => {
    const response = await recover({ email: email });

    if (response) {
      onChangeForm(email, "email");
    }
  };

  const onSubmitRecover = () => {
    setAttemp(1);
    recoverSubmit(formConfirm);
  };

  return (
    <Wrapper>
      <Header hasBackButton />
      <KeyboardAwareScrollView bounces={false}>
        <Box justify="center" align="center">
          <Image style={{ width: 150, height: 40 }} source={logo} />
        </Box>
        <RenderIf condition={!isConfrim}>
          <Box align="center" pt={30} pl={30} pr={30}>
            <BoldText size={20}>Récuperer mon mot de passe</BoldText>
            <NormalText
              style={{ textAlign: "center" }}
              size={16}
              color={Colors.light.secondary}
              mt={10}
            >
              Nous sommes impatients de vous revoir.
            </NormalText>
          </Box>
          <Box pt={15} pl={30} pr={30}>
            <AuthInput
              onChangeText={onChangeEmail}
              placeholder="Entrer votre email"
            />
          </Box>
          <Box pt={30} pl={30} pr={30}>
            <AuthButton
              onPress={onRecover}
              text="Récuperer"
              loading={loading}
            />
          </Box>
        </RenderIf>
        <RenderIf condition={isConfrim}>
          <Box align="center" pt={30} pl={30} pr={30}>
            <BoldText size={20}>Récuperer mon mot de passe</BoldText>
            <NormalText
              style={{ textAlign: "center" }}
              size={16}
              color={Colors.light.secondary}
              mt={10}
            >
              Verifiez votre email et saisisez le code de confirmation.
            </NormalText>
          </Box>
          <Box pt={15} pl={30} pr={30}>
            <AuthInput
              onChangeText={(text) => onChangeForm(text, "confirmation")}
              placeholder="Code de vérification"
              hasError={attempt > 0 && formConfirm.confirmation.length < 6}
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
        </RenderIf>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default RecoverPassword;
