import React from "react";
import ReactDOM from "react-dom";
import { ProviderStore } from "./Store";
import App from "./App";

import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ProviderStore>
    <App />
  </ProviderStore>,
  rootElement
);
