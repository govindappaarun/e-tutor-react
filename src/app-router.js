import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import WelComePage from "./pages/welcome";

const isAuthenticated = false;

const publicRoutes = [
  { path: "/", name: <WelComePage /> },
  { path: "/home", name: <HomePage /> },
  { path: "/signup", name: <SignUpPage /> },
  { path: "/login", name: <LoginPage /> },
];

const privateRoutes = [
  { path: "/products", name: <WelComePage /> },
  { path: "/cart", name: <HomePage /> },
  { path: "/wishlist", name: <SignUpPage /> },
];

const AppRouter = () => {
  const appRoutes = publicRoutes.concat(isAuthenticated ? privateRoutes : []);

  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route path={route.path} element={route.name} />
      ))}
    </Routes>
  );
};

export default AppRouter;
