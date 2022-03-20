import React from "react";
import Header from "../header";
import { Wrapper } from "./Login.styled";
import ComputerDesk from "src/assets/media/computer-desk.png";
import Box from "src/components/Box";
import Input from "src/components/Input";
import Checkbox from "src/components/Checkbox";
import Button from "src/components/Button";
import Typography from "src/components/Typography/Typography";
import Image from "src/components/Image/Image";

export default function Login() {
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
          <form action="#" className="flex-column flex-gap">
            <Input placeholder="Email Address" className="input-wrapper">
              <label>Email</label>
            </Input>

            <Input placeholder="Create Password">
              <label>Password</label>
            </Input>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Checkbox label="Remember Me" />

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
