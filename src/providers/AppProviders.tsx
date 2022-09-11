import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./StoreProviders/StoreProvider";
import { ThemeProviders } from "./Theme/ThemeProviders";

type Props = {
  children: React.ReactNode;
};

export const AppProviders = (props: Props) => (
  <BrowserRouter>
    <ThemeProviders>
      <StoreProvider>{props.children}</StoreProvider>
    </ThemeProviders>
  </BrowserRouter>
);
