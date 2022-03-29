import React, { useEffect, useState } from "react";
import { Wrapper } from "./ProductList.styled";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import { Category, Product } from "./types";
import ProductCard from "./Components/Product";
import Box from "src/components/Box";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Badge from "src/components/Badge";
import Typography from "src/components/Typography/Typography";
import { instructors } from "./product-data";
import Card from "src/components/Card";
import { useNavigate } from "react-router-dom";
import { useCart } from "src/contexts";
import { RiArrowDownSLine, RiSoundModuleLine } from "react-icons/ri";
import ProductFilter from "./Components/ProductFilter";
import cartService from "src/services/cartService";
import productService from "src/services/productService";

export default function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    getProducts();
    getCategories();
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

  const getCategories = () => {
    productService
      .getCategories()
      .then((response) => {
        setCategories(response.categories);
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

  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <main className="container">
          <header>
            <Box
              display="flex"
              gap="md"
              alignItems="center"
              className="actions p-20"
            >
              <Button size="lg" outline color="primary">
                Filter <RiSoundModuleLine className="icon fs-1" />
              </Button>
              <Input
                className="input-wrapper with-icon"
                placeholder="What do you want learn"
              >
                <i className="fas fa-search"></i>
              </Input>
              <Box
                className="ml-auto"
                display="flex"
                gap="sm"
                alignItems="center"
              >
                <Typography variant="h3">Sort By</Typography>
                <Button color="error" size="lg" outline>
                  Trending
                  <RiArrowDownSLine className="icon fs-2" />
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              gap="xs"
              alignItems="center"
              className="search-result p-21"
            >
              <Typography variant="h4">Suggestion:</Typography>
              {categories &&
                categories.map(({ categoryName }, index) => (
                  <Badge key={index} color="warning">
                    {categoryName}
                  </Badge>
                ))}
              <Typography variant="h5" className="ml-auto">
                {/* 3,145,684 results find for “ui/ux design” */}
              </Typography>
            </Box>
          </header>
          <ProductFilter />
          <section className="product-list">
            {products &&
              products.map((product: Product, index: number) => (
                <ProductCard
                  className="product-card"
                  key={index}
                  product={product}
                  addToCart={addToCart}
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  onClick={() => navigate(`/product/${product._id}`)}
                />
              ))}
          </section>
        </main>
        <section className="instructors">
          <Typography variant="h1" align="center" color="info">
            Our Popular instructors in Web Development
          </Typography>
          <Box display="flex" justifyContent="center" gap="sm" className="my-2">
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
