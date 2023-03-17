import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import {
  Amplify,
  Auth,
  AuthModeStrategyType,
  DataStore,
  Hub,
  I18n,
  SortDirection,
  syncExpression,
} from "aws-amplify";
import config from "./src/aws-exports";
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import {
  store,
  persistor,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "./store";
import * as WebBrowser from "expo-web-browser";
import { Button, Linking, Platform, Text, View } from "react-native";
import { unset_user, set_user } from "./store/slice/userSlice";
import * as ExpoLinking from "expo-linking";
import useUser from "./hooks/useUser";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";
import { PersistGate } from "redux-persist/integration/react";
import { EventTypes, Events } from "./src/models";

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

/* const in_10_days = new Date(new Date().getTime() - 864000000);

DataStore.configure({
  syncExpressions: [
    syncExpression(Events, () => {
      return (event) =>
        event
          .eventtypesID("eq", "all")
          .or((event) =>
            event.date("ge", in_10_days.toISOString()).recurrent("eq", true)
          );
    }),
  ],
});
 */
//Amplify.Logger.LOG_LEVEL = "DEBUG";

I18n.setLanguage("fr");

const Root = () => {
  const { loaded, hideSplash } = useCachedResources();

  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const { user } = useAppSelector<RootState>((state) => state);

  const dispatch = useAppDispatch();

  const url = ExpoLinking.useURL();

  // const { createUser } = useUser();

  useEffect(() => {
    checkAuth();
    console.log("ready ready");

    (async () => {
      // await DataStore.clear();
      await DataStore.start();
    })();

    const listener = Hub.listen("", async (hubData) => {
      const { event, data } = hubData.payload;
      console.log("444 ready", event, 111222);
      if (event === "ready") {
        await DataStore.start();
      }
    });

    const unsubscribe = Hub.listen(
      "auth",
      async ({ payload: { event, data } }) => {
        if (event === "signIn") {
          await DataStore.start();
        }
        if (event === "signOut") {
          dispatch(unset_user());
          await DataStore.clear();
          await DataStore.start();
        }
      }
    );

    return () => {
      unsubscribe();
      listener();
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
      /*       console.log("creating...");
      await createUser({
        id: userData.username,
        email: userData.email,
        fullName: userData.name,
      });
      console.log("creating ending..."); */

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
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
