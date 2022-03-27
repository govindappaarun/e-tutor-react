import React from "react";
import Rating from "src/components/Rating";
import { Product as ProductType } from "../types";
import { CardProps } from "src/components/Card/Card";
import Button, { IconButton } from "src/components/Button";
import { WishIcon, WishIconSolid, ProductCard } from "../ProductList.styled";
import { useCart } from "src/contexts";

interface ProductCardProps extends Omit<CardProps, "children"> {
  product: ProductType;
  addToCart: (product: ProductType) => void;
  addToWishlist: (product: ProductType) => void;
  removeFromWishlist: (product: ProductType) => void;
}

export default function Product({
  product,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  ...rest
}: ProductCardProps) {
  const { title, rating, img, tag, enrollment, price } = product;
  const { state } = useCart();
  const isInWishList = (product: ProductType): boolean => {
    return !!state.wishList.find(
      (item: ProductType) => item._id === product._id
    );
  };

  const isInCart = (product: ProductType): boolean => {
    return !!state.cart.find((item: ProductType) => item._id === product._id);
  };

  return (
    <ProductCard cursor="pointer" className="card" key={title} {...rest}>
      <div className="card-media">
        <img loading="lazy" src={img} alt="course" />
        {isInWishList(product) ? (
          <IconButton
            className="wish-icon"
            onClick={(e) => {
              e.stopPropagation();
              removeFromWishlist(product);
            }}
          >
            <WishIconSolid className="wish-icon" />
          </IconButton>
        ) : (
          <IconButton
            className="wish-icon visible"
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(product);
            }}
          >
            <WishIcon />
          </IconButton>
        )}
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
        {!isInCart(product) && (
          <Button
            className="add-to-cart my-1"
            outline
            color="warning"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </ProductCard>
  );
}
