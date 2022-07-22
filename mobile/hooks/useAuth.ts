import { useAppDispatch, useAppSelector } from "./../store/index";
import { Auth } from "aws-amplify";
import { set_user, unset_user } from "../store/slice/userSlice";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useState } from "react";

type FormType = {
  username: string;
  email: string;
  password: string;
  confirmation: string;
  fullName: string;
};

const useAuth = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAppSelector((state) => state);

  const signIn = async ({
    email,
    password,
  }: Pick<FormType, "email" | "password">) => {
    if (!email || !password) {
      console.error("credentials required");
      return;
    }
    setLoading(true);
    try {
      let userData = await Auth.signIn(email, password);
      console.log(userData);
      userData = { username: userData.username, ...userData.attributes };

      dispatch(set_user(userData));
    } catch (error: { message: string }) {
      console.log(error);
      showMessage({
        message: "Erreur de connexion",
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
    if (!password || !email || !fullName) {
      console.error("credentials required");
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

      dispatch(set_user(userData));
    } catch (error) {
      console.error(error);
      showMessage({
        message: "Erreur d'inscription",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const recover = async ({ email }: Pick<FormType, "email">) => {
    try {
      await Auth.forgotPassword(email);
    } catch (error) {
      console.error(error);
    }
  };

  const recoverSubmit = async ({
    email,
    confirmation,
    password,
  }: Pick<FormType, "email" | "confirmation" | "password">) => {
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(email, confirmation, password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const confrimAccount = async ({ code }: { code: string }) => {
    if (!user) {
      console.log("User must be authenticated");
      return;
    }
    try {
      //@ts-ignore
      await Auth.confirmSignUp(user.username, code);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      dispatch(unset_user());
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loading,
    user,
    signIn,
    signUp,
    recover,
    confrimAccount,
    recoverSubmit,
    signOut,
  };
};

export default useAuth;
