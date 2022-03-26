import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { GlobalStyle } from "./globalStyle";
import { makeServer } from "./server";
import theme from "./theme/theme";
import "./index.css";
import { Provider } from "./contexts";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
