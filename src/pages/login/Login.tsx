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

type LoginCredentials = { email: string; password: string };

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
    doLoginApi(values as LoginCredentials);
  }, initialState);

  const doLoginApi = (values: LoginCredentials) => {
    if (!(values.email && values.password)) {
      return;
    }
    authService
      .doLogin(values)
      .then((result) => {
        localStorage.setItem("token", result.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.foundUser));
        authDispatch({ type: "DO_LOGIN", payload: result.foundUser });
        navigate("/home");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const doGuestLogin = () => {
    doLoginApi({ email: "johndoe@gmail.com", password: "johnDoe123" });
  };

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
            <Box display="flex" gap="md" direction="column">
              <Button
                color="primary"
                style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
              >
                Sign In
              </Button>

              <Button
                color="success"
                outline
                type="button"
                onClick={doGuestLogin}
                style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
              >
                Guest Sign In
              </Button>
            </Box>
          </form>
        </div>
      </main>
    </Wrapper>
  );
}
