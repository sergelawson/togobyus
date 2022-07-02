import { ScrollView, Image } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import { Box, NormalText, BoldText } from "../../components/Common";
import { AuthButton, AuthInput } from "../../components/Auth";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RecoverPassword = () => {
  return (
    <Wrapper>
      <Header hasBackButton />
      <KeyboardAwareScrollView bounces={false}>
        <Box justify="center" align="center">
          <Image style={{ width: 150, height: 40 }} source={logo} />
        </Box>
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
          <AuthInput placeholder="Entrer votre email" />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton text="Récuperer" />
        </Box>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default RecoverPassword;
