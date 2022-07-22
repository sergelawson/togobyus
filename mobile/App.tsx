import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { Amplify, Auth, Hub } from "aws-amplify";
import config from "./src/aws-exports";
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store, RootState, useAppDispatch, useAppSelector } from "./store";
//import { PersistGate } from "redux-persist/integration/react";

import { unset_user } from "./store/slice/userSlice";
Amplify.configure(config);

const Root = () => {
  const { loaded, hideSplash } = useCachedResources();

  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const { user } = useAppSelector<RootState>((state) => state);

  const diispatch = useAppDispatch();

  useEffect(() => {
    checkAuth();
    Hub.listen("auth", (data) => {
      const { payload } = data;

      if (payload.event === "signOut") {
        diispatch(unset_user());
      }
    });
  }, []);

  const checkAuth = async () => {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (error) {
      diispatch(unset_user());
    } finally {
      setAuthStatus(true);
    }
  };

  if (loaded && authStatus) {
    hideSplash();
  }

  if (!loaded) {
    return <></>;
  }
  return (
    <>
      <Navigation isLoggedIn={user?.isLoggedIn || false} />
      <FlashMessage position="bottom" />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
