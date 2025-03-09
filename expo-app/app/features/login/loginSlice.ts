import api from "@/app/network/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginGetToken = createAsyncThunk("login", async (userId: number) => {
  return await api.get("login", { userId: userId.toString() });
});

export interface State {
  token?: string;
  isLoggedIn: boolean;
}

const initialState: State = {
  token: undefined,
  isLoggedIn: false,
};

export const slice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginGetToken.fulfilled, (state, action) => {
      if (action.payload && action.payload.token) {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    });
  },
});

export { loginGetToken };

export default slice.reducer;
