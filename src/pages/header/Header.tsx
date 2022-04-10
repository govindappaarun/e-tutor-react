import React from "react";
import Navbar from "src/components/Navbar";
import { Wrapper } from "./Header.styled";
import Button from "src/components/Button";
import Logo from "src/assets/media/logo-cap.png";
import Box from "src/components/Box";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Typography from "src/components/Typography/Typography";
import { useAuth, useCart, useTheme } from "src/contexts";
import { CartIcon, WishIcon } from "src/components/Icon";
import Badge from "src/components/Badge";
import { ThemeIcon } from "./Header.styled";
import clsx from "clsx";
import { RiUserLine } from "react-icons/ri";

export type HeaderProps = {};

export default function Header({ ...rest }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useCart();
  const { authState, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const doLogout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Wrapper as="header" {...rest}>
      <Navbar
        justifyContent="space-between"
        alignItems="center"
        className="navbar py-1"
      >
        <div className="nav-left flex-gap-2">
          <Box
            display="flex"
            onClick={() => navigate("/home")}
            alignItems="center"
            gap="xs"
            className="brand-container"
          >
            <img className="brand-logo" src={Logo} alt="Education" />
            <Typography variant="h2">E Tutor</Typography>
          </Box>
        </div>

        <div className="nav-right flex-gap-2">
          {authState.isLoggedIn ? (
            <>
              <Box
                className="icon-container"
                display="inline-block"
                onClick={() => navigate("/cart")}
              >
                <CartIcon color="warning" />
                <Badge color="warning" className="badge">
                  {state.quantity}
                </Badge>
              </Box>
              <Box
                className="icon-container"
                display="inline-block"
                onClick={() => navigate("/wishlist")}
              >
                <Badge color="success" className="badge">
                  {state.wishList ? state.wishList.length : 0}
                </Badge>
                <WishIcon />
              </Box>
              <ThemeIcon
                className={clsx("mx-1", { reverse: theme === "dark" })}
                onClick={toggleTheme}
              >
                {theme}
              </ThemeIcon>
              <Link to="/home/profile">
                <RiUserLine className="mx-1" style={{ fontSize: "2rem" }} />
              </Link>
              <Button
                onClick={doLogout}
                color="warning"
                outline
                className="btn btn-link btn-link-warning"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              {!location.pathname.includes("signup") && (
                <Button
                  onClick={() => navigate("/signup")}
                  color="warning"
                  outline
                  className="btn btn-link btn-link-warning"
                >
                  Create Account
                </Button>
              )}

              {!location.pathname.includes("login") && (
                <Button
                  onClick={() => navigate("/login")}
                  color="primary"
                  className="btn btn-warning"
                >
                  Sign In
                </Button>
              )}
            </>
          )}
        </div>
      </Navbar>
    </Wrapper>
  );
}
