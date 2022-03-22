import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import { CartProvider } from "./contexts/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
