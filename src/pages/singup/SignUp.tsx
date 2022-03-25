import React from "react";
import Image from "src/components/Image/Image";
import Header from "../header";
import { Wrapper } from "./SignUp.styled";
import Rocket from "src/assets/media/rocket.png";
import Box from "src/components/Box";
import Typography from "src/components/Typography/Typography";
import Input from "src/components/Input";
import Checkbox from "src/components/Checkbox";
import Button from "src/components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "src/hooks/useForm";
import axios from "axios";

export default function SingnUp() {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const { onChange, onSubmit, values } = useForm(async () => {
    try {
      const result = await axios.post("/api/auth/signup", { ...values });
      if (result.status === 201) {
        console.log(result.data);
        navigate("/login");
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
            src={Rocket}
            className="img-responsive"
          />
        </Box>
        <div className="form-container">
          <Typography
            color="primary"
            variant="h1"
            className="text-center secondary"
          >
            Create Your Account
          </Typography>
          <form action="#" className="flex-column flex-gap" onSubmit={onSubmit}>
            <div className="flex flex-gap-2">
              <Input
                placeholder="First Name"
                name="firstName"
                onChange={onChange}
                className="my-1 flex-grow-1"
              >
                <label>First Name</label>
              </Input>

              <Input
                placeholder="Last Name"
                name="lastName"
                onChange={onChange}
                className="my-1 flex-grow-1"
              >
                <label>Last Name</label>
              </Input>
            </div>

            <Input
              placeholder="Email Address"
              name="email"
              onChange={onChange}
              className="my-1"
            >
              <label>Email</label>
            </Input>

            <Input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Create Password"
              className="my-1 flex-grow-1"
            >
              <label>Password</label>
            </Input>

            <Input
              type="password"
              name="confirmPassword"
              onChange={onChange}
              placeholder="Confirm Password"
              className="my-1 flex-grow-1"
            >
              <label>Confirm Password</label>
            </Input>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className="my-1"
            >
              <Checkbox label="Remember Me" />

              <Button color="warning" outline>
                Create Account <i className="fas fa-chevron-right"></i>
              </Button>
            </Box>
          </form>
        </div>
      </main>
    </Wrapper>
  );
}
