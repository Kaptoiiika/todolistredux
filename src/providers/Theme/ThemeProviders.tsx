import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Inter;
  }
`;

const defaultTheme = {
  colorPrimary: "#e4b062",
  colorSecondary: "#27569C",
  fontPrimary: "#000",
  errorText: "crimson",
};

export const ThemeProviders = (props: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
