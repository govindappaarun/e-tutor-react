import React from "react";
import Button from "src/components/Button";
import Card from "src/components/Card";
import Typography from "src/components/Typography";
import { useCart } from "src/contexts";
import cartService from "src/services/cartService";
import Footer from "../footer";
import Header from "../header";
import { Product } from "../product-list/types";
import { Wrapper } from "./Cart.styled";

export default function Cart() {
  const { state, dispatch } = useCart();

  const removeItemFromCart = (item: Product) => {
    cartService.removeFromCart(item).then(() => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { item: { _id: item._id } },
      });
    });
  };

  const addToWishList = (item: Product) => {
    cartService.addToWishlist(item).then(() => {
      dispatch({
        type: "MOVE_TO_WISHLIST",
        payload: { item },
      });
    });
  };

  return (
    <Wrapper>
      <Header />
      <main>
        <Typography align="center" variant="h1">
          My Cart ({state.quantity})
        </Typography>
        {state.cart.map((item: Product) => (
          <Card key={item._id}>
            <Typography variant="h2">{item.title}</Typography>
            <div className="card-footer">
              <Button outline onClick={() => removeItemFromCart(item)}>
                REMOVE FROM CART
              </Button>
              <Button onClick={() => addToWishList(item)}>
                MOVE TO WISHLIST
              </Button>
            </div>
          </Card>
        ))}
      </main>
      <Footer />
    </Wrapper>
  );
}
