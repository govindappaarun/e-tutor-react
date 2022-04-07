import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import {
  ProductCard,
  StyledCategory,
  StyledSection,
  Wrapper,
} from "./home.styled";
import { Box, Button, Typography } from "src/components";
import Hero from "src/assets/media/hero-thumb.jpg";
import productService from "src/services/productService";
import { Product } from "../product-list/types";
import { useNavigate } from "react-router-dom";

export interface Category {
  _id: string;
  categoryName: string;
  description: string;
  count: number;
}
export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productService.getCategories().then((response) => {
      setCategories(response.categories);
    });
    productService
      .getProducts()
      .then((response) => setProducts(response.products));
  }, []);

  return (
    <Wrapper>
      <Header />
      <main className="container">
        <StyledSection className="hero-section">
          <Box
            display="flex"
            direction="column"
            alignItems="center"
            gap="md"
            grow={1}
            className="hero-section-left"
          >
            <Typography variant="h1">
              Learn with our experts anytime anywhere
            </Typography>

            <Typography variant="subheading" className="sub-title">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </Typography>
            <Button
              onClick={() => navigate("/signup", { replace: true })}
              className="btn btn-warning"
            >
              Create Account
            </Button>
          </Box>
          {/* <Box grow={1} className="hero-section-right">
            <img
              loading="lazy"
              className="img-responsive"
              src={Hero}
              alt="hero sectionimage"
            />
          </Box> */}
        </StyledSection>

        <StyledSection className="category-section">
          <Typography variant="h1" align="center">
            Browse with top category
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
            gap="md"
            className="categories mx-2"
          >
            {categories.map(
              ({ categoryName, count, description, _id }: Category) => {
                return (
                  <StyledCategory
                    key={_id}
                    onClick={() => navigate(`/products/${_id}`)}
                  >
                    <Typography variant="title">{categoryName}</Typography>
                    <div>{description}</div>
                    <div>{count} Courses</div>
                  </StyledCategory>
                );
              }
            )}
          </Box>
        </StyledSection>

        <StyledSection className="top-courses">
          <Typography variant="h1" align="center">
            Explore our top courses
          </Typography>

          <div className="product-list">
            {products.length > 0 &&
              products.slice(1, 5).map((product: Product) => {
                return (
                  <ProductCard>
                    <div className="card-media">
                      <img loading="lazy" src={product.img} alt="course" />
                    </div>
                    <div className="card-body">
                      <div className="tags flex flex-space-between">
                        <div className="text-badge text-xs text-secondary">
                          {product.tag}
                        </div>
                        <div className="h4 price secondary">
                          {product.price}
                        </div>
                      </div>
                      <div className="text-sm py-1">{product.title}</div>
                    </div>
                    <div className="card-footer flex flex-space-between">
                      <div className="rating">
                        <i className="fas fa-star"></i> {product.rating}
                      </div>
                      <div className="num-of-students">
                        <i className="fas fa-user"></i> {product.enrollment}{" "}
                        students
                      </div>
                    </div>
                  </ProductCard>
                );
              })}
          </div>
        </StyledSection>

        <StyledSection className="m-2 text-right">
          <Button
            className="btn btn-warning mb-8"
            onClick={() => navigate("/products")}
          >
            Browse All Course
          </Button>
        </StyledSection>
      </main>
      <Footer />
    </Wrapper>
  );
}
