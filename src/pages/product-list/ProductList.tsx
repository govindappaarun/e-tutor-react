import React, { useEffect, useState } from "react";
import { Wrapper } from "./ProductList.styled";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import { Product } from "./types";
import ProductCard from "./Components/product";
import Checkbox from "src/components/Checkbox";
import Box from "src/components/Box";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Badge from "src/components/Badge";
import Typography from "src/components/Typography/Typography";
import { categories, instructors, ratings } from "./product-data";
import Card from "src/components/Card";
import { useNavigate } from "react-router-dom";
import { useCart } from "src/contexts/cartContext";

export default function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[] | null>(null);
  const { state, dispatch } = useCart();

  useEffect(() => {
    axios
      .get("/api/products")
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: { item: product } });
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
                <i className="fas fa-sliders-h btn-icon"></i> Filter
              </Button>
              <Input
                className="input-wrapper with-icon"
                placeholder="What do you want learn"
              >
                <i className="fas fa-search"></i>
              </Input>
              <Button color="error" size="lg" outline className="ml-auto">
                Trending
                <i className="fas fa-angle-down"></i>
              </Button>
            </Box>
            <Box
              display="flex"
              gap="xs"
              alignItems="center"
              className="search-result p-21"
            >
              <Typography variant="h4">Suggestion:</Typography>
              <Badge color="warning">JavaScript</Badge>
              <Badge color="warning">Web Development</Badge>
              <Badge color="warning">UI</Badge>
              <Badge color="warning">React</Badge>
              <Badge color="warning">NodeJs</Badge>

              <Typography variant="h5" className="ml-auto">
                3,145,684 results find for “ui/ux design”
              </Typography>
            </Box>
          </header>

          <aside className="sidebar">
            <section className="filter">
              <div className="group">
                {categories.map((category) => (
                  <Box key={category.categoryName}>
                    <Box className="group-header  my-1">
                      <Typography className="my-1" variant="h3">
                        {category.categoryName}
                      </Typography>
                    </Box>
                    <Box>
                      {category.subCategories.map((sub, index) => (
                        <Box key={index} display="flex">
                          <Checkbox id={sub.name} label={sub.name} />
                          <Box className="ml-auto">{sub.courses}</Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </div>
              <div className="group">
                <Typography className="my-1" variant="h3">
                  Rating
                </Typography>
                {ratings.map((rating, index) => (
                  <Box key={index} display="flex">
                    <Checkbox label={rating.label} />
                    <Box className="ml-auto">{rating.count}</Box>
                  </Box>
                ))}
              </div>
              <div className="group">
                <Typography className="my-1" variant="h3">
                  Price
                </Typography>
                <Input type="range" min={1000} max={10000} />
              </div>
            </section>
          </aside>
          <section className="product-list">
            {products &&
              products.map((product: Product, index: number) => (
                <ProductCard
                  className="product-card"
                  key={index}
                  product={product}
                  addToCart={addToCart}
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
                <img src={instructor.profile} />
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
