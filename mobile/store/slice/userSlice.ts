import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  fullname?: string;
  email?: string;
  username?: string;
  isLoggedIn?: boolean;
  temp?: string;
}

// Define the initial state using that type
const initialState: { user?: UserState } = {};

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
  },
});

export const { set_user, unset_user } = userSlice.actions;

export default userSlice.reducer;
