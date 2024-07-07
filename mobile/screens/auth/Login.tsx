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
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import Layout from "../../constants/Layout";
import useAuth from "../../hooks/useAuth";
import { set_user } from "../../store/slice/userSlice";
import { useAppDispatch } from "../../store";

type LoginScreenProps = NativeStackNavigationProp<AuthStackParamList, "Login">;
type AuthScreenProps = NativeStackNavigationProp<RootStackParamList, "Auth">;

type FormType = {
  email: string;
  password: string;
};
const Login = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const dispatch = useAppDispatch();

  const { signIn, loading } = useAuth();

  const [formData, setFormData] = useState<FormType>({
    email: "",
    password: "",
  });

  const onTextChange = (text: string, field: string) => {
    setFormData((state) => ({ ...state, [field]: text }));
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToPasswordRecovery = () => {
    navigation.navigate("RecoverPassword");
  };

  const onSignIn = async () => {
    await signIn(formData);
  };

  const signInGoogle = () => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
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
          <AuthInput
            value={formData.email}
            placeholder="Entrer votre email"
            onChangeText={(text) => onTextChange(text, "email")}
          />
        </Box>
        <Box pt={15} pl={30} pr={30}>
          <AuthInput
            value={formData.password}
            isSecure
            onChangeText={(text) => onTextChange(text, "password")}
            placeholder="Entrer votre mot de passe"
          />
        </Box>
        <Box pt={30} pl={30} pr={30}>
          <AuthButton
            onPress={onSignIn}
            loading={loading}
            text="Connectez-vous"
          />

          {/*           <GoogleAuthButton
            onPress={() => signInGoogle()}
            text="Continuer avec Google"
          /> */}
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
