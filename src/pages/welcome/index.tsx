import React from "react";
import Cartoon from "../../assets/media/cartoon.png";
import Wrapper from "./style";
import Image from "../../components/Image/Image";

export default function WelComePage() {
  return (
    <Wrapper>
      <section className="left">
        <div className="hero text-center primary">
          Try our Courses get hired faster!
        </div>

        <div className="text-center get-started">
          <a href="src/home.html">
            <button className="btn btn-outline-primary">Get Started</button>
          </a>
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
