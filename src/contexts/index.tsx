import { CartProvider, useCart } from "./cartContext";
import { AuthProvider, useAuth } from "./authContext";
import { ProductFilterProvider, useFilter } from "./productFilterContext";
import { ThemeProvider, useTheme } from "./themeContext";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <ProductFilterProvider>{children}</ProductFilterProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export { Provider, useCart, useFilter, useTheme, useAuth };
