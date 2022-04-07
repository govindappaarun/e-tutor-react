import React, { useEffect, useMemo, useState } from "react";
import { Wrapper } from "./ProductList.styled";
import Header from "../header";
import Footer from "../footer";
import { Product } from "./types";
import ProductCard from "./Components/Product";
import Box from "src/components/Box";
import Typography from "src/components/Typography/Typography";
import { instructors } from "./product-data";
import Card from "src/components/Card";
import { useNavigate } from "react-router-dom";
import { useCart, useFilter } from "src/contexts";
import ProductFilter from "./Components/ProductFilter";
import cartService from "src/services/cartService";
import productService from "src/services/productService";
import { useProductFilter } from "./hooks";

export default function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[] | null>(null);
  const { dispatch } = useCart();
  const [filteredProducts] = useProductFilter(products ? products : []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    productService
      .getProducts()
      .then((response) => {
        setProducts(response.products);
      })
      .catch(function (error) {
        console.log(error);
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

  const addToWishlist = (product: Product) => {
    cartService
      .addToWishlist(product)
      .then(() => {
        dispatch({ type: "MOVE_TO_WISHLIST", payload: { item: product } });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const removeFromWishlist = (product: Product) => {
    cartService.removeFromWishlist(product).then(() => {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { item: product } });
    });
  };

  const gotoCart = () => {
    navigate("/cart");
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <main className="container">
          <header></header>
          <ProductFilter />
          <section className="product-list">
            {filteredProducts &&
              filteredProducts.map((product: Product, index: number) => (
                <ProductCard
                  className="product-card"
                  key={index}
                  product={product}
                  addToCart={addToCart}
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  gotoCart={gotoCart}
                  onClick={() => navigate(`/product/${product._id}`)}
                />
              ))}
          </section>
        </main>
        <section className="instructors">
          <Typography variant="h1" align="center" color="info">
            Our Popular instructors in Web Development
          </Typography>
          <Box
            display="flex"
            wrap="wrap"
            justifyContent="center"
            gap="sm"
            className="my-2"
          >
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <img src={instructor.profile} alt={instructor.name} />
                <Typography align="center" variant="div">
                  {instructor.name}
                </Typography>
                <Typography align="center" variant="div">
                  {instructor.title}
                </Typography>
              </Card>
            ))}
          </Box>
        </section>
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
}
