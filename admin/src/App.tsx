import React, { useState } from "react";
import Router from "./components/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import UserContext from "./components/UserContext";

Amplify.configure(config);
//Amplify.Logger.LOG_LEVEL = "DEBUG";

const App: React.FC = () => {
  /*   useEffect(() => {
    // Create listener
    const listener = Hub.listen("datastore", async (hubData) => {
      const { event, data } = hubData.payload;
      if (event === "networkStatus") {
        console.log(`User has a network connection: ${data.active}`);
      }

      console.log("Data: ", data);
    });

    // Remove listener
    return () => {
      listener();
    };
  }, []); */

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
