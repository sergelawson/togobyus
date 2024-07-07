import React, { useEffect, useState } from "react";
import { Auth, DataStore, Hub } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const protectedRoute = (WrappedComponent: React.FC, route = "/login") => {
  const MyComponent = ({ ...props }) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    const { setUser } = useAuth();

    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const groups =
          user.signInUserSession.accessToken.payload["cognito:groups"];

        if (!groups || !groups.includes("Admin")) Auth.signOut();

        setUser(user.attributes);
        setLoggedIn(true);
        await DataStore.start();
      } catch (error) {
        navigate(route, { replace: true });
        setLoggedIn(false);
      }
    };

    useEffect(() => {
      checkAuth();
      Hub.listen("auth", (data) => {
        const { payload } = data;

        if (payload.event === "signOut") {
          navigate(route, { replace: true });
          setLoggedIn(false);
          clearData();
        }
      });
    }, []);

    const clearData = async () => {
      await DataStore.clear();
      await DataStore.stop();
    };

    if (!loggedIn) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return MyComponent;
};

export default protectedRoute;
