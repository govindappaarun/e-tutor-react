import React from "react";
import Avatar from "src/components/Avatar/Avatar";
import Badge from "src/components/Badge";
import Box from "src/components/Box";
import Button from "src/components/Button";
import Checkbox from "src/components/Checkbox";
import {
  CartIcon,
  WishIcon,
  UserIcon,
  CreditCardIcon,
  HomeIcon,
} from "src/components/Icon";
import Navbar from "src/components/Navbar/Navbar";
import Typography from "src/components/Typography/Typography";
import { ReactComponent as Cart } from "../../assets/svg/shopping-cart.svg";

export default function Test() {
  return (
    <div className="App">
      <Box display="flex" alignItems="strech" justifyContent="end">
        <Button color="primary">Primary</Button>
        <Button color="warning" outline>
          Warning
        </Button>
      </Box>
      <CartIcon color="red" hoverColor="green" />
      <WishIcon />
      <Checkbox label="Test Label" />
    </div>
  );
}
