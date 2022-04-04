import React from "react";
import { Box } from "src/components";
import Button from "src/components/Button";
import Card from "src/components/Card";
import Typography from "src/components/Typography";
import { useCart } from "src/contexts";
import cartService from "src/services/cartService";
import styled from "styled-components";
import Footer from "../footer";
import Header from "../header";
import { Product } from "../product-list/types";
import { Wrapper } from "./Wishlist.styled";

export const ProductCard = styled.div`
  max-width: 18rem;
  margin: 0.5rem 1rem;
  display: inline-block;

  &.card-footer {
    padding: 0 20px;
  }
`;

export default function Wishlist() {
  const { state, dispatch } = useCart();

  const isInCart = (product: Product): boolean => {
    return !!state.cart.find((item: Product) => item._id === product._id);
  };

  const removeItemFromCart = (item: Product) => {
    cartService.removeFromCart(item).then(() => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { item: { _id: item._id } },
      });
    });
  };

  const removeFromWishList = (item: Product) => {
    cartService.removeFromWishlist(item).then(() => {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: { item },
      });
    });
  };

  const addToCart = (product: Product) => {
    cartService
      .addToCart(product)
      .then(() => {
        dispatch({ type: "ADD_TO_CART", payload: { item: product } });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <Wrapper>
      <Header />
      <main>
        <Typography variant="h1" align="center" color="info">
          My Wishes ({state.wishList.length})
        </Typography>
        {state.wishList.map((product: Product) => (
          <ProductCard>
            <div className="card-meida">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="card-body">
              <div className="text-badge text-xs text-secondary">
                {product.tag}
              </div>
              <div className="h4 price secondary">{product.price}</div>
              <div className="text-sm py-1">{product.title}</div>
            </div>
            <Box display="flex" direction="column" className="card-footer">
              <Button outline onClick={() => removeFromWishList(product)}>
                REMOVE WISHLIST
              </Button>
              {!isInCart(product) && (
                <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
              )}
              {isInCart(product) && (
                <Button onClick={() => removeItemFromCart(product)}>
                  REMOVE FROM CART
                </Button>
              )}
            </Box>
          </ProductCard>
        ))}
      </main>
      <Footer />
    </Wrapper>
  );
}
