import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Organisers, UserEvent } from "../../src/models";

// Define a type for the slice state
type UserState = {
  fullname?: string;
  email?: string;
  username?: string;
  isLoggedIn?: boolean;
  temp?: string;
};

// Define the initial state using that type
const initialState: {
  user?: UserState;
  events?: UserEvent[];
  orgs?: Organisers[];
} = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_user: (state, action: PayloadAction<UserState>) => {
      console.log("diiss ", action.payload);
      state.user = action.payload;
    },
    unset_user: (state) => {
      state.user = {};
    },
    set_user_events: (state, action: PayloadAction<UserEvent[]>) => {
      state.events = action.payload;
    },
    set_user_orgs: (state, action: PayloadAction<Organisers[]>) => {
      state.orgs = action.payload;
    },
  },
});

export const { set_user, unset_user, set_user_events, set_user_orgs } =
  userSlice.actions;

export default userSlice.reducer;
