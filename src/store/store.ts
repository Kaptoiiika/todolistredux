import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clientProfileReducer } from "./clientProfile/clientProfile.slice";
import { postReducer } from "./posts/posts.slice";
import { userReducer } from "./users/users.slice";

const rootReducer = combineReducers({
  clientProfile: clientProfileReducer,
  post: postReducer,
  user: userReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
