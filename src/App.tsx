import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import { CartProvider } from "./contexts/cartContext";
import { ProductFilterProvider } from "./contexts/productFilterContext";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CartProvider>
          <ProductFilterProvider>
            <AppRouter />
          </ProductFilterProvider>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
