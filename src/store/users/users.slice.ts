import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiService/apiService";
import { IUser } from "../../types/User";
import { AppDispatch } from "../store";

interface UserState {
  users: Record<number, IUser>;
}

const initialState: UserState = {
  users: {},
};

export const fetchUserById =
  (id: number | string) => async (dispatch: AppDispatch) => {
    try {
      const user = await apiClient.getUserById(id);
      dispatch(userSlice.actions.addNewUsers(user));
    } catch (error) {}
  };

export const userSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addNewUsers: (state, action: PayloadAction<IUser>) => {
      state.users[action.payload.id] = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
