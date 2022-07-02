import { Image, Pressable, ScrollView, View } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Box, NormalText, BoldText, FlexBox } from "../../components/Common";
import { logo } from "../../constants/Images";
import { AuthButton, AuthInput, GoogleAuthButton } from "../../components/Auth";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/AuthStackParamsList";
import { RootStackParamList } from "../../navigation/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Layout from "../../constants/Layout";
type LoginScreenProps = NativeStackNavigationProp<AuthStackParamList, "Login">;
type AuthScreenProps = NativeStackNavigationProp<RootStackParamList, "Auth">;

const Login = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const authNavigation = useNavigation<AuthScreenProps>();

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToPasswordRecovery = () => {
    navigation.navigate("RecoverPassword");
  };

  const [loading, setLoading] = useState(false);
  const goToMain = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      authNavigation.navigate("Main");
    }, 2000);
  };
  return (
    <Wrapper>
      <KeyboardAwareScrollView bounces={false}>
        <Box justify="center" pt={Layout.window.height * 0.08} align="center">
          <Image style={{ width: 226, height: 65 }} source={logo} />
        </Box>
        <Box align="center" pt={30} pl={30} pr={30}>
          <BoldText size={20}>Se connecter</BoldText>
          <NormalText
            style={{ textAlign: "center" }}
            size={16}
            color={Colors.light.secondary}
            mt={10}
          >
            Allez-y et découvrez ce qui est passe actuellement à Lomé.
          </NormalText>
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthInput placeholder="Entrer votre email" />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput isSecure placeholder="Entrer votre mot de passe" />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton
            onPress={goToMain}
            loading={loading}
            text="Connectez-vous"
          />
          <GoogleAuthButton text="Continuer avec Google" />
        </Box>
        <Box pt={30} pl={30} pr={30} align="center">
          <Box flexDirection="row">
            <NormalText>Vous n'avez pas de compte? </NormalText>
            <Pressable
              onPress={goToRegister}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <NormalText color={Colors.light.primary}>
                Créer un compte
              </NormalText>
            </Pressable>
          </Box>
        </Box>
        <Box pt={10} pl={30} pr={30} align="center">
          <Pressable onPress={goToPasswordRecovery}>
            <NormalText color={Colors.light.primary}>
              J'ai oublié mon mot de passe
            </NormalText>
          </Pressable>
        </Box>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Login;
