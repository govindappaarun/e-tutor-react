import React from "react";
import Card from "src/components/Card";
import Rating from "src/components/Rating";
import { Product } from "../types";
import Course1 from "src/assets/media/course1.jpg";
import { CardProps } from "src/components/Card/Card";
import Button from "src/components/Button";

interface ProductCardProps extends Omit<CardProps, "children"> {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function ProductCard({
  product,
  addToCart,
  ...rest
}: ProductCardProps) {
  const { title, rating, tag, enrollment, price } = product;
  return (
    <Card cursor="pointer" className="card" key={title} {...rest}>
      <div className="card-media">
        <img loading="lazy" src={Course1} alt="course" />
      </div>
      <div className="card-body">
        <div className="tags flex flex-space-between">
          <div className="text-badge text-xs text-secondary">{tag}</div>
          <div className="h4 price secondary">{price}</div>
        </div>
        <div className="text-sm py-1">{title}</div>
      </div>
      <div className="card-footer flex flex-space-between">
        <div className="rating">
          <Rating rating={rating} />
        </div>
        <div className="num-of-students">
          <i className="fas fa-user"></i>
          {enrollment}
        </div>
        <Button
          className="add-to-cart my-1"
          outline
          color="warning"
          onClick={() => {
            // e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
