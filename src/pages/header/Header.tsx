import React from "react";
import Navbar from "src/components/Navbar";
import { Wrapper } from "./Header.styled";
import Button from "src/components/Button";
import Logo from "src/assets/media/logo-cap.png";
import Box from "src/components/Box";
import { useNavigate } from "react-router-dom";
export type HeaderProps = {};

export default function ({ ...rest }: HeaderProps) {
  const navigate = useNavigate();
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
            <div className="h3">E Tutor</div>
          </Box>
        </div>

        <div className="nav-right flex-gap-2">
          <a href="wishlist.html">
            <i className="far fa-heart"></i>
          </a>
          <a href="#">
            <i className="far fa-bell"></i>
          </a>
          <a href="cart.html">
            <i className="fas fa-cart-plus"></i>
          </a>
          <a href="signup.html">
            <Button
              color="warning"
              outline
              className="btn btn-link btn-link-warning"
            >
              Create Account
            </Button>
          </a>
          <a href="login.html">
            <Button color="primary" className="btn btn-warning">
              Sign In
            </Button>
          </a>
        </div>
      </Navbar>
    </Wrapper>
  );
}
