import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import WelComePage from "./pages/welcome";
import TestPage from "./pages/test";
import ProductList from "./pages/product-list";

const NoMatch = () => <h3>404 - No matching route found</h3>;

const isAuthenticated = true;

const publicRoutes = [
  { path: "/", name: <WelComePage /> },
  { path: "/home", name: <HomePage /> },
  { path: "/signup", name: <SignUpPage /> },
  { path: "/login", name: <LoginPage /> },
  { path: "/test", name: <TestPage /> },
  { path: "*", name: <NoMatch /> },
];

const privateRoutes = [
  { path: "/product-list", name: <ProductList /> },
  { path: "/cart", name: <HomePage /> },
  { path: "/wishlist", name: <SignUpPage /> },
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
