import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

type Props = {
  children: React.ReactNode;
};

export const StoreProvider = (props: Props) => {
  const store = useMemo(() => setupStore(), []);

  return <Provider store={store}>{props.children}</Provider>;
};
