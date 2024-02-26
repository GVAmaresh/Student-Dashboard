import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  details: object;
  role: string;
}

const initialState: UserState = {
  details: {},
  role: "",
};

export const userDetails = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (
      state: Draft<UserState>,
      action: PayloadAction<object>
    ) => {
      state.details = action.payload;
    },
    setRole: (state: Draft<UserState>, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { setUserDetails, setRole } = userDetails.actions;
export default userDetails.reducer;
