import React, { useState } from "react";
import Router from "./components/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import config from "./aws-exports";
import UserContext from "./components/UserContext";

Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

const App: React.FC = () => {
  const [user, setUser] = useState(null);
  return (
    <ChakraProvider>
      <UserContext.Provider value={{ user, setUser } as any}>
        <Router />
      </UserContext.Provider>
    </ChakraProvider>
  );
};

export default App;
