import { useMemo } from "react";
import { useFilter } from "src/contexts";
import { Product } from "./types";

export const useProductFilter = (products: Product[]) => {
  const { state } = useFilter();

  const filteredProducts = useMemo(() => {
    const { category, rating, range, sortByPrice } = state;

    const categoryFilter = (product: Product) => {
      if (category.length) {
        return category.includes(product.categoryName);
      } else {
        return true;
      }
    };

    const ratingFilter = (product: Product, maxRating: number) => {
      if (rating.length) {
        return +product.rating >= +maxRating;
      } else {
        return true;
      }
    };

    const rangeFilter = (product: Product) => {
      if (range) {
        return product.price <= range;
      } else {
        return true;
      }
    };

    const sortBy = (productA: Product, productB: Product) => {
      if (sortByPrice === "low") {
        return productA.price - productB.price;
      } else {
        return productB.price - productA.price;
      }
    };

    if (products) {
      let maxRating = Array.isArray(rating) ? Math.max.apply(null, rating) : 0;
      return products
        .filter(categoryFilter)
        .filter(rangeFilter)
        .filter(ratingFilter, maxRating)
        .sort(sortBy);
    } else if (products) {
      return products;
    }
  }, [products, state]);

  return [filteredProducts];
};
