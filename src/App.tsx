import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { AppProviders } from "./providers/AppProviders";
import { RouterPage } from "./router";

const Main = styled.main``;

function App() {
  return (
    <AppProviders>
      <Header />
      <Main>
        <RouterPage />
      </Main>
    </AppProviders>
  );
}

export default App;
