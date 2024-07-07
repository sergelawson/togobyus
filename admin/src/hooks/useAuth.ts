import { Auth } from "aws-amplify";
import { useContext, useState } from "react";
import UserContext from "../components/UserContext";
import { useNavigate } from "react-router-dom";

type FormType = {
  username: string;
  email: string;
  password: string;
  confirmation: string;
};

const useAuth = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState<boolean>(false);

  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate();

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

      userData = { username: userData.username, ...userData.attributes };

      console.log(userData);

      const authUser = await Auth.currentAuthenticatedUser();
      const groups =
        authUser.signInUserSession.accessToken.payload["cognito:groups"];

      if (!groups || !groups.includes("Admin")) {
        Auth.signOut();
        setMessage("Utilisateur non autorisé!");
        return;
      }

      setUser(userData);
      navigate("/", { replace: true });
    } catch (error) {
      setMessage("Erreur de login !");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    setUser,
    loading,
    message,
    signIn,
    signOut,
  };
};

export default useAuth;
