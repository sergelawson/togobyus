import React, { useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const protectedRoute = (WrappedComponent: React.FC, route = "/login") => {
  const MyComponent = ({ ...props }) => {
    const navigate = useNavigate();

    const { setUser } = useAuth();

    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user.attributes);
      } catch (error) {
        navigate(route, { replace: true });
      }
    };

    useEffect(() => {
      checkAuth();
      Hub.listen("auth", (data) => {
        const { payload } = data;

        if (payload.event === "signOut") {
          navigate(route, { replace: true });
        }
      });
    }, []);

    return <WrappedComponent {...props} />;
  };

  return MyComponent;
};

export default protectedRoute;
