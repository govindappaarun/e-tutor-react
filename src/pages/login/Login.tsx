import React, { useEffect, useState } from "react";
import Header from "../header";
import { Wrapper } from "./Login.styled";
import ComputerDesk from "src/assets/media/computer-desk.png";
import Box from "src/components/Box";
import Input from "src/components/Input";
import Button from "src/components/Button";
import Typography from "src/components/Typography/Typography";
import Image from "src/components/Image/Image";
import axios from "axios";
import { useForm } from "src/hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts";
import InputPassword from "src/components/Input/InputPassword";
import authService from "src/services/authService";

interface LocationState {
  from: Record<string, any>;
}

export default function Login() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();

  const location = useLocation();
  const state = location.state as LocationState;

  const onLogin = () => {
    if (state && state.from) {
      navigate(state.from.pathname, { replace: true });
    } else {
      navigate("/products");
    }
  };

  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(async () => {
    authService
      .doLogin(values)
      .then((response) => {
        localStorage.setItem("token", response.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.foundUser));
        authDispatch({ type: "DO_LOGIN", payload: response.foundUser });
        onLogin();
      })
      .catch((err) => {
        console.log({ err });
      });
  }, initialState);

  return (
    <Wrapper>
      <Header />
      <main>
        <Box display="flex" justifyContent="center" className="wallpaper">
          <Image
            alt="computer desk"
            loading="lazy"
            src={ComputerDesk}
            className="img-responsive"
          />
        </Box>
        <div className="form-container">
          <Typography variant="h1" className="text-center secondary">
            Sign In To Your Account
          </Typography>
          <form action="#" className="flex-column flex-gap" onSubmit={onSubmit}>
            <Input
              placeholder="Enter Email Address"
              className="my-2"
              name="email"
              onChange={onChange}
            >
              <label>Email</label>
            </Input>
            <InputPassword
              placeholder="Enter Password"
              className="my-2"
              name="password"
              onChange={onChange}
              label="Password"
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className="my-1"
            >
              <Button color="primary" outline>
                Sign In <i className="fas fa-chevron-right"></i>
              </Button>
            </Box>
          </form>
        </div>
      </main>
    </Wrapper>
  );
}
