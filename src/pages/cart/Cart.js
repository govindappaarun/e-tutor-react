import React from "react";
import { Box } from "src/components";
import Button from "src/components/Button";
import Card from "src/components/Card";
import Typography from "src/components/Typography";
import { useCart } from "src/contexts";
import cartService from "src/services/cartService";
import Footer from "../footer";
import Header from "../header";
import { CartCard, Wrapper } from "./Cart.styled";

export default function Cart() {
  const { state, dispatch } = useCart();

  const removeItemFromCart = (item) => {
    cartService.removeFromCart(item).then(() => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { item: { _id: item._id } },
      });
    });
  };

  const addToWishList = (item) => {
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
        {state.cart.map((item) => (
          <CartCard key={item._id}>
            <div className="card-meida">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-body">
              <div className="text-badge text-xs text-secondary">
                {item.tag}
              </div>
              <div className="h4 price secondary">{item.price}</div>
              <div className="text-sm py-1">{item.title}</div>
            </div>
            <Box display="flex" direction="column" className="card-footer">
              <Button outline onClick={() => removeItemFromCart(item)}>
                REMOVE FROM CART
              </Button>
              <Button onClick={() => addToWishList(item)}>
                MOVE TO WISHLIST
              </Button>
            </Box>
          </CartCard>
        ))}
      </main>
      <Footer />
    </Wrapper>
  );
}
