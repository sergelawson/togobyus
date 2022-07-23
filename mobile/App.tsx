import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { Amplify, Auth, Hub, I18n } from "aws-amplify";
import config from "./src/aws-exports";
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store, RootState, useAppDispatch, useAppSelector } from "./store";
//import { PersistGate } from "redux-persist/integration/react";

import { unset_user, set_user } from "./store/slice/userSlice";
Amplify.configure(config);
I18n.setLanguage("fr");

const Root = () => {
  const { loaded, hideSplash } = useCachedResources();

  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const { user } = useAppSelector<RootState>((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    checkAuth();
    Hub.listen("auth", (data) => {
      const { payload } = data;

      if (payload.event === "signOut") {
        dispatch(unset_user());
      }
    });
  }, []);

  const checkAuth = async () => {
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
      <Navigation isLoggedIn={user?.user?.isLoggedIn || false} />
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
