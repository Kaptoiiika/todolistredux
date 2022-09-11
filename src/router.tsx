import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/redux/useAppSelector";
import { Authorization } from "./screens/Authorization/Authorization";
import { PostList } from "./screens/Posts/list/PostList";

export const RouterPage = () => {
  const { isAuth } = useAppSelector((state) => state.clientProfile);

  return <Routes>{isAuth ? IsAuthRoute() : IsNotAuthRoute()}</Routes>;
};

const IsAuthRoute = () => <Route path="*" element={<PostList />} />;

const IsNotAuthRoute = () => <Route path="*" element={<Authorization />} />;
