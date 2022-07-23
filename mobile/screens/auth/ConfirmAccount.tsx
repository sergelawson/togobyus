import { ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Box, NormalText, BoldText } from "../../components/Common";
import { AuthButton, AuthInput } from "../../components/Auth";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import { logo } from "../../constants/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useAuth from "../../hooks/useAuth";
import { useRoute } from "@react-navigation/native";

const ConfirmAccount = () => {
  const route = useRoute();

  //@ts-ignore
  const { email } = route.params;

  const { confrimAccount, resendConfirmationCode, loading } = useAuth();

  const [code, setCode] = useState<string>("");

  const onChangeText = (text: string) => setCode(text);

  const onConfirm = () => {
    confrimAccount({ emailConfirm: email, code: code });
  };
  return (
    <Wrapper>
      <Header hasBackButton />
      <KeyboardAwareScrollView bounces={false}>
        <Box justify="center" align="center">
          <Image style={{ width: 150, height: 40 }} source={logo} />
        </Box>
        <Box align="center" pt={30} pl={30} pr={30}>
          <BoldText size={20}>Confirmer mon compte</BoldText>
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
          <AuthInput placeholder="Entrer le code" onChangeText={onChangeText} />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton loading={loading} text="Confirmer" onPress={onConfirm} />
        </Box>
        <Box pt={10} pl={30} pr={30} align="center">
          <TouchableOpacity onPress={() => resendConfirmationCode(email)}>
            <NormalText color={Colors.light.primary}>
              Renvoyer le code de confirmation
            </NormalText>
          </TouchableOpacity>
        </Box>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default ConfirmAccount;
