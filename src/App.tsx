import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import { Provider } from "./contexts";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
