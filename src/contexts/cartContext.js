import { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    quantity: 0,
    totalPrice: 0,
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
