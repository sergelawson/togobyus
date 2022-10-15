import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { Amplify, Auth, AuthModeStrategyType, Hub, I18n } from "aws-amplify";
import config from "./src/aws-exports";
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store, RootState, useAppDispatch, useAppSelector } from "./store";
import * as WebBrowser from "expo-web-browser";
import { Button, Linking, Platform, Text, View } from "react-native";
//import { PersistGate } from "redux-persist/integration/react";
import { unset_user, set_user } from "./store/slice/userSlice";
import * as ExpoLinking from "expo-linking";
import useUser from "./hooks/useUser";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

//@ts-ignore
async function urlOpener(url, redirectUrl) {
  //@ts-ignore
  const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
    url,
    redirectUrl
  );

  if (type === "success" && Platform.OS === "ios") {
    WebBrowser.dismissBrowser();
    return Linking.openURL(newUrl);
  }
}

Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  oauth: {
    ...config.oauth,
    urlOpener,
  },
});

// Amplify.Logger.LOG_LEVEL = "DEBUG";

I18n.setLanguage("fr");

const Root = () => {
  const { loaded, hideSplash } = useCachedResources();

  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const { user } = useAppSelector<RootState>((state) => state);

  const dispatch = useAppDispatch();

  const url = ExpoLinking.useURL();

  const { createUser } = useUser();

  useEffect(() => {
    checkAuth();
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signOut") {
        dispatch(unset_user());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [url]);

  const checkAuth = async () => {
    try {
      let userData = await Auth.currentAuthenticatedUser();

      userData = {
        username: userData.username,
        isLoggedIn: true,
        ...userData.attributes,
      };
      console.log("creating...");
      await createUser({
        id: userData.username,
        email: userData.email,
        fullName: userData.name,
      });
      console.log("creating ending...");

      //@ts-ignore
      dispatch(set_user(userData));
    } catch (error) {
      dispatch(unset_user());
    } finally {
      setAuthStatus(true);
      if (loaded && authStatus) {
        hideSplash();
      }
    }
  };

  if (!loaded) {
    return <></>;
  }

  //console.log("auth status", authStatus);

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
