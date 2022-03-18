import React from "react";
import { useNavigate } from "react-router-dom";
import Cartoon from "src/assets/media/cartoon.png";
import Button from "src/components/Button";
import Image from "src/components/Image/Image";
import Typography from "src/components/Typography/Typography";
import Wrapper from "./style";

export default function WelComePage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <section className="left">
        <Typography variant="hero" color="primary">
          Try our Courses get hired faster!
        </Typography>

        <div className="get-started">
          <Button
            color="primary"
            size="lg"
            outline
            onClick={() => {
              navigate("/home");
            }}
          >
            Get Started
          </Button>
        </div>
      </section>

      <section className="right">
        <Image
          src={Cartoon}
          className="img-responsive"
          loading="lazy"
          alt="WWW"
        />
      </section>
    </Wrapper>
  );
}
