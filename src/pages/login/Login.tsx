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
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts";

export default function Login() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/home"); // auto redirect to home if logged in
    }
  }, [authState.isLoggedIn]);

  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(async () => {
    try {
      const result = await axios.post("/api/auth/login", { ...values });
      if (result.status === 200) {
        console.log(result.data);
        // save to localstorage
        localStorage.setItem("token", result.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.data.foundUser));
        authDispatch({ type: "DO_LOGIN", payload: result.data.foundUser });
        navigate("/home");
      }
    } catch (err) {
      console.log({ err });
    }
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
              placeholder="Email Address"
              className="my-2"
              name="email"
              onChange={onChange}
            >
              <label>Email</label>
            </Input>
            <Input
              placeholder="Create Password"
              className="my-2"
              name="password"
              onChange={onChange}
            >
              <label>Password</label>
            </Input>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className="my-1"
            >
              <Button color="warning" outline>
                Sign In <i className="fas fa-chevron-right"></i>
              </Button>
            </Box>
          </form>
        </div>
      </main>
    </Wrapper>
  );
}
