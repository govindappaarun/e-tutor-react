import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "src/components/Box";
import Button from "src/components/Button";
import Typography from "src/components/Typography";
import { useCart } from "src/contexts";
import Footer from "src/pages/footer";
import Header from "src/pages/header";
import { Product } from "../types";
import styled from "styled-components";
import productService from "src/services/productService";
import cartService from "src/services/cartService";

export const ProductCard = styled.div`
  max-width: 18rem;
  margin: 0.5rem 1rem;
  display: inline-block;

  &.card-footer {
    padding: 0 20px;
  }
`;

export default function ProductInfo() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { state, dispatch } = useCart();

  useEffect(() => {
    if (params.id) {
      productService
        .getProduct(params.id)
        .then((response) => {
          setProduct(response.product);
        })
        .catch((err) => console.log({ err }));
    }
  }, [params.id]);

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

  const addToWishList = (item: Product) => {
    cartService.addToWishlist(item).then(() => {
      dispatch({
        type: "MOVE_TO_WISHLIST",
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
    <div>
      <Header />
      <div>
        {product && (
          <Box
            display="flex"
            direction="column"
            alignItems="center"
            className="my-2"
          >
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
                <Button outline onClick={() => addToWishList(product)}>
                  MOVE TO WISHLIST
                </Button>
                {!isInCart(product) && (
                  <Button onClick={() => addToCart(product)}>
                    ADD TO CART
                  </Button>
                )}
                {isInCart(product) && (
                  <Button onClick={() => removeItemFromCart(product)}>
                    REMOVE FROM CART
                  </Button>
                )}
              </Box>
            </ProductCard>
            <Button color="success">Checkout</Button>
          </Box>
        )}
      </div>

      <Footer />
    </div>
  );
}
