import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiService/apiService";
import { IPost } from "../../types/Post";
import { AppDispatch } from "../store";

interface PostState {
  postList: IPost[];
  initial: boolean;
}

const initialState: PostState = {
  postList: [],
  initial: false,
};

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    const posts = await apiClient.getPosts();
    dispatch(postSlice.actions.addPosts(posts));
  } catch (error) {}
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<IPost[]>) => {
      state.postList = action.payload;
      state.initial = true;
    },
  },
});

export const postReducer = postSlice.reducer;
