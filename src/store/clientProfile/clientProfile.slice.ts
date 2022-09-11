import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiService/apiService";
import { IUser } from "../../types/User";
import { AppDispatch } from "../store";

interface ClientProfileState {
  profile: IUser | null;
  isAuth: boolean;
  error: string;
}

const initialState: ClientProfileState = {
  profile: null,
  isAuth: false,
  error: "",
};

export const clientLogin =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const user = await apiClient.login(login, password);
      dispatch(clientProfileSlice.actions.loginProfile(user));
    } catch (error: any) {
      dispatch(
        clientProfileSlice.actions.loginRejected(
          error?.message || "Unknown error"
        )
      );
    }
  };

export const clientProfileSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    loginProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
      state.isAuth = true;
      state.error = "";
    },

    logoutProfile: (state) => {
      state.profile = null;
      state.isAuth = false;
    },

    loginRejected: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const clientProfileReducer = clientProfileSlice.reducer;
