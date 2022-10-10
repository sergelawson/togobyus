import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "./../store/index";
import { Auth } from "aws-amplify";
import { set_user, unset_user } from "../store/slice/userSlice";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/AuthStackParamsList";
import useUser from "./useUser";

type FormType = {
  username: string;
  email: string;
  password: string;
  confirmation: string;
  fullName: string;
};

type LoginScreenProps = NativeStackNavigationProp<AuthStackParamList, "Login">;

const useAuth = () => {
  const dispatch = useAppDispatch();

  const { createUser } = useUser();

  const navigation = useNavigation<LoginScreenProps>();

  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAppSelector((state) => state);

  const [isConfrim, setIsConfirm] = useState<boolean>(false);

  const signIn = async ({
    email,
    password,
  }: Pick<FormType, "email" | "password">) => {
    if (!email || !password) {
      showMessage({
        message: "Entrez votre email et mot de passe !",
        type: "danger",
        duration: 3000,
      });

      return;
    }
    setLoading(true);
    try {
      let userData = await Auth.signIn(email, password);

      userData = {
        username: userData.username,
        isLoggedIn: true,
        ...userData.attributes,
      };

      await createUser({
        id: userData.username,
        email: userData.email,
        fullName: userData.name,
      });

      //@ts-ignore
      dispatch(set_user(userData));
      //@ts-ignore
    } catch (error: { message: string }) {
      console.log({ ...error });
      if (error.code === "UserNotConfirmedException") {
        navigation.navigate("ConfirmAccount", {
          email: email,
        });
        return;
      }
      showMessage({
        message: "Votre email ou mot de passe est incorrect !",
        type: "danger",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async ({
    email,
    fullName,
    password,
  }: Pick<FormType, "fullName" | "email" | "password">) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fullName.length < 3) {
      showMessage({
        message: "Entrez votre nom complet !",
        type: "danger",
        duration: 3000,
      });
      return;
    }
    if (!email.match(mailformat)) {
      showMessage({
        message: "Entrez un email valid !",
        type: "danger",
        duration: 3000,
      });
      return;
    }
    if (password.length < 6) {
      showMessage({
        message: "Entrez un mot de passe (6 charactères minimum) !",
        type: "danger",
        duration: 3000,
      });
      return;
    }
    setLoading(true);
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email: email,
          name: fullName,
        },
      });
      //@ts-ignore
      const userData = { username: user.username, ...user.attributes };

      await createUser({
        id: userData.username,
        email: userData.email,
        fullName: userData.name,
      });

      dispatch(set_user(userData));

      navigation.navigate("ConfirmAccount", {
        email: email,
      });
    } catch (error) {
      console.table(error);
      showMessage({
        message: "Erreur d'inscription !",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const recover = async ({ email }: Pick<FormType, "email">) => {
    setLoading(true);
    let response = false;
    try {
      await Auth.forgotPassword(email);
      setIsConfirm(true);
      response = true;
    } catch (error) {
      console.log(error);
      showMessage({
        message: "Erreur de email !",
        type: "danger",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
    return response;
  };

  const recoverSubmit = async ({
    email,
    confirmation,
    password,
  }: Pick<FormType, "email" | "confirmation" | "password">) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (confirmation.length < 6) {
      showMessage({
        message: "Entrez le code de confrimation valid !",
        type: "danger",
        duration: 3000,
      });
      return;
    }
    if (!email.match(mailformat)) {
      console.error("Email not set");
      navigation.navigate("Login");
      return;
    }
    if (password.length < 6) {
      showMessage({
        message: "Entrez un mot de passe (6 charactères minimum) !",
        type: "danger",
        duration: 3000,
      });
      return;
    }

    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(email, confirmation, password);
      navigation.navigate("Login");
      showMessage({
        message: "Votre mot de pass a été modifié avec succèss !",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      showMessage({
        message: "Erreur de modification !",
        type: "danger",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const confrimAccount = async ({
    emailConfirm,
    code,
  }: {
    emailConfirm: string;
    code: string;
  }) => {
    if (emailConfirm.length < 3) {
      console.log(emailConfirm);
      showMessage({
        message: "Erreur de compte !",
        type: "danger",
        duration: 3000,
      });
      return;
    }

    if (code.length < 6) {
      showMessage({
        message: "Entrez le code valid !",
        type: "danger",
        duration: 3000,
      });
    }
    setLoading(true);
    try {
      //@ts-ignore
      await Auth.confirmSignUp(emailConfirm, code);
      navigation.navigate("Login");
      showMessage({
        message: "Votre compte a été confirmer avec succèss !",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      showMessage({
        message: "Erreur de confirmation !",
        type: "danger",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const resendConfirmationCode = async (emailConfirm: string) => {
    if (emailConfirm.length < 3) {
      console.log(emailConfirm);
      return;
    }
    try {
      await Auth.resendSignUp(emailConfirm);
      showMessage({
        message: "Code envoyé avec succèss !",
        type: "success",
        duration: 3000,
      });
    } catch (err) {
      //@ts-ignore
      console.log("error resending code: ", err.code);
      showMessage({
        message: "Erreur d'envoie !",
        type: "danger",
        duration: 3000,
      });
    }
  };

  /*   const checkAuth = async () => {
    try {
   let userData = await Auth.currentAuthenticatedUser();

      userData = {
        username: userData.username,
        isLoggedIn: true,
        ...userData.attributes,
      };

      //@ts-ignore
      dispatch(set_user(userData));
    } catch (error) {
      dispatch(unset_user());
    }
  };
 */
  const signOut = async () => {
    try {
      await Auth.signOut();
      console.warn("Signed out");
      dispatch(unset_user());
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loading,
    isConfrim,
    user,
    signIn,
    signUp,
    recover,
    confrimAccount,
    recoverSubmit,
    signOut,
    resendConfirmationCode,
    //  checkAuth,
  };
};

export default useAuth;
