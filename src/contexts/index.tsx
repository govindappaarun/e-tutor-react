import { CartProvider, useCart } from "./cartContext";
import { ProductFilterProvider, useFilter } from "./productFilterContext";
import { ThemeProvider, useTheme } from "./themeContext";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <CartProvider>
        <ProductFilterProvider>{children}</ProductFilterProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export { Provider, useCart, useFilter, useTheme };
