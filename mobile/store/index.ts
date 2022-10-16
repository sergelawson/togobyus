import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { persistStore, persistReducer } from "redux-persist";
import userSlice from "./slice/userSlice";

/* const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
}; */

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["user/set_user_events", "user/set_user_orgs"],
        // Ignore these field paths in all actions
        //ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ["user.events", "user.orgs"],
      },
    }),
  reducer: {
    user: userSlice,
  },
});

//const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
