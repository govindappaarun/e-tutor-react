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

export default function SingnUp() {
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
          <form action="#" className="flex-column flex-gap">
            <div className="flex flex-gap-2">
              <Input
                placeholder="First Name"
                className="input-wrapper flex-grow-1"
              >
                <label>First Name</label>
              </Input>

              <Input
                placeholder="Last Name"
                className="input-wrapper flex-grow-1"
              >
                <label>Last Name</label>
              </Input>
            </div>

            <Input placeholder="User Name" className="input-wrapper">
              <label>User Name</label>
            </Input>

            <Input
              type="password"
              placeholder="Email Address"
              className="input-wrapper"
            >
              <label>Email</label>
            </Input>

            <div className="flex flex-gap-2">
              <Input
                type="password"
                placeholder="Create Password"
                className="input-wrapper flex-grow-1"
              >
                <label>Password</label>
              </Input>

              <Input
                placeholder="Confirm Password"
                className="input-wrapper flex-grow-1"
              >
                <label>Confirm Password</label>
              </Input>
            </div>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
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
