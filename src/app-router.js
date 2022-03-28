import { Routes, Route, useRoutes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import WelComePage from "./pages/welcome";
import TestPage from "./pages/test";
import ProductList from "./pages/product-list";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import ProductInfo from "./pages/product-list/Components/ProductInfo";
import { useAuth } from "./contexts";

const NoMatch = () => <h3>404 - No matching route found</h3>;

const publicRoutes = [
  { path: "/", element: <WelComePage /> },
  { path: "/home", element: <ProductList /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/test", element: <TestPage /> },
  { path: "*", element: <NoMatch /> },
];

// const isAuthenticated = true;
const privateRoutes = [
  {
    path: "/products",
    element: <ProductList />,
  },
  { path: "product/:id", element: <ProductInfo /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <Wishlist /> },
];

const AppRouter = () => {
  const { authState } = useAuth();
  console.log({ authState });
  const appRoutes = publicRoutes.concat(
    authState.isLoggedIn ? privateRoutes : []
  );

  return useRoutes(appRoutes);
};

export default AppRouter;
