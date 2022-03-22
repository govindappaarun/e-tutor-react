import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import WelComePage from "./pages/welcome";
import TestPage from "./pages/test";
import ProductList from "./pages/product-list";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import ProductInfo from "./pages/product-list/Components/ProductInfo";

const NoMatch = () => <h3>404 - No matching route found</h3>;

const isAuthenticated = true;

const publicRoutes = [
  { path: "/", name: <WelComePage /> },
  { path: "/home", name: <ProductList /> },
  { path: "/signup", name: <SignUpPage /> },
  { path: "/login", name: <LoginPage /> },
  { path: "/test", name: <TestPage /> },
  { path: "*", name: <NoMatch /> },
];

const privateRoutes = [
  { path: "/product-list", name: <ProductList /> },
  { path: "/product/:id", name: <ProductInfo /> },
  { path: "/cart", name: <Cart /> },
  { path: "/wishlist", name: <Wishlist /> },
];

const AppRouter = () => {
  const appRoutes = publicRoutes.concat(isAuthenticated ? privateRoutes : []);

  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.name} path={route.path} element={route.name} />
      ))}
    </Routes>
  );
};

export default AppRouter;
