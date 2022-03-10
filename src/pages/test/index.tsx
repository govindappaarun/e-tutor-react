import React from "react";
import Avatar from "src/components/Avatar/Avatar";
import Badge from "src/components/Badge";
import Button from "src/components/Button";
import { CartIcon, WishIcon, UserIcon } from "src/components/Icon";
import Navbar from "src/components/Navbar/Navbar";
import Typography from "src/components/Typography/Typography";

export default function Test() {
  return (
    <div className="App">
      <Button color="primary" size="lg">
        Test
      </Button>
      <Button color="success" size="md" outline>
        Test
      </Button>
      <Button color="warning" size="md" outline disabled>
        Test
      </Button>
      <Button color="warning" size="sm">
        Test
      </Button>
      <Button color="error" size="xlg" outline>
        Test
      </Button>
      Hello React!, I am coming
      <Typography variant="hero">Lorem ipsum dolor sit amet.</Typography>
      <Typography variant="h3" color="success">
        Lorem ipsum dolor sit amet.
      </Typography>
      <WishIcon size="xs" color="#F5C0B8" />
      <WishIcon size="md" color="#F5C0B8" />
      <WishIcon size="lg" color="#F5C0B8" />
      <WishIcon size="xlg" color="#F5C0B8" />
      <CartIcon color="#C6F0C2" />
      <UserIcon />
    </div>
  );
}
