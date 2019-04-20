import React, { useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  movies: [],
  favourites: [],
  App: { sideDrawer: "false" }
};

export const Store = React.createContext(initialState);

export function ProviderStore(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
