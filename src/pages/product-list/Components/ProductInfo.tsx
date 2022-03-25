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

export default function ProductInfo() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    if (params.id) {
      axios
        .get(`/api/products/${params.id}`)
        .then((response) => {
          console.log({ response });
          setProduct(response.data.product);
        })
        .catch(() => {});
    }
  }, [params.id]);

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
            <Typography variant="h1" color="warning">
              {product.title}
            </Typography>

            <Button
              outline
              color="primary"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: { item: product } })
              }
            >
              Add to Cart
            </Button>

            <Button
              outline
              color="warning"
              onClick={() => {
                dispatch({
                  type: "MOVE_TO_WISHLIST",
                  payload: { item: product },
                });
              }}
            >
              Move to Wishlist
            </Button>

            <Button color="success">Checkout</Button>
          </Box>
        )}
      </div>

      <Footer />
    </div>
  );
}
