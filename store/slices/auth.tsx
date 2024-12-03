import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: { email: string } | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: localStorage.getItem("auth_token") || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ token: string; user: { email: string } }>
    ) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("auth_token", action.payload.token);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("auth_token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
