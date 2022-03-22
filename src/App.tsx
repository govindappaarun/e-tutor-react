import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import { CartProvider } from "./contexts/cartContext";
import { ProductFilterProvider } from "./contexts/productFilterContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductFilterProvider>
          <AppRouter />
        </ProductFilterProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
