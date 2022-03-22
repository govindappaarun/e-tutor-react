import React from "react";
import Button from "src/components/Button";
import Card from "src/components/Card";
import Typography from "src/components/Typography";
import { useCart } from "src/contexts/cartContext";
import Header from "../header";
import { Product } from "../product-list/types";
import { Wrapper } from "./Wishlist.styled";

export default function Wishlist() {
  const { state, dispatch } = useCart();
  return (
    <Wrapper>
      <Header />
      <Typography variant="h1" color="info">
        My Wishes ({state.wishList.length})
      </Typography>
      {state.wishList.map((item: Product) => (
        <Card>
          <Typography variant="h2">{item.title}</Typography>
          <Button
            outline
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: { item: { _id: item._id } },
              })
            }
          >
            REMOVE FROM WISHLIST
          </Button>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { item },
              })
            }
          >
            MOVE TO CART
          </Button>
        </Card>
      ))}
    </Wrapper>
  );
}
