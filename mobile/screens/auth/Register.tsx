import { ScrollView, Image } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import { Box, NormalText, BoldText } from "../../components/Common";
import { AuthButton, AuthInput, GoogleAuthButton } from "../../components/Auth";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = () => {
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
          <AuthInput placeholder="Entrer votre nom complet" />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput placeholder="Entrer votre email" />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput isSecure placeholder="Entrer votre mot de passe" />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton text="S'inscrire" />
          <GoogleAuthButton text="Continuer avec Google" />
        </Box>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Register;
