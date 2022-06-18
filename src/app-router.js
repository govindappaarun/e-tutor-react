import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import WelComePage from "./pages/welcome";
import ProductList from "./pages/product-list";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import ProductInfo from "./pages/product-list/Components/ProductInfo";
import HomePage from "./pages/home";
import SecureRoute from "./SecureRoute";
import UserProfile from "./pages/userProfile";

const NoMatch = () => <h3>404 - No matching route found</h3>;

const publicRoutes = [
  { path: "/", element: <WelComePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <NoMatch /> },
];

const privateRoutes = [
  {
    path: "/products",
    element: (
      <SecureRoute>
        <ProductList />
      </SecureRoute>
    ),
  },
  {
    path: "/products/:categoryName",
    element: (
      <SecureRoute>
        <ProductList />
      </SecureRoute>
    ),
  },
  {
    path: "product/:id",
    element: (
      <SecureRoute>
        <ProductInfo />
      </SecureRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <SecureRoute>
        <Cart />
      </SecureRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <SecureRoute>
        <Wishlist />
      </SecureRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <SecureRoute>
        <UserProfile />
      </SecureRoute>
    ),
  },
];

const AppRouter = () => {
  const appRoutes = [...publicRoutes, ...privateRoutes];

  return useRoutes(appRoutes);
};

export default AppRouter;
