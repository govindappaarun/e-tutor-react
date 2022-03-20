import React from "react";
import Card from "src/components/Card";
import Rating from "src/components/Rating";
import { Product } from "../types";
import Course1 from "src/assets/media/course1.jpg";

export default function ProductCard({
  title,
  rating,
  img,
  tag,
  enrollment,
  price,
  ...rest
}: Product) {
  return (
    <Card className="card" key={title} {...rest}>
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
      </div>
    </Card>
  );
}
