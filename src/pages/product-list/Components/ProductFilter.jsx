import React, { useEffect, useState } from "react";
import { ratings } from "../product-data";
import { Box, Typography, Checkbox, Input, Button } from "src/components";
import { useFilter } from "src/contexts/productFilterContext";
import { RiSoundModuleLine } from "react-icons/ri";
import productService from "src/services/productService";
import { useParams } from "react-router-dom";

export default function ProductFilter() {
  const { state, dispatch } = useFilter();
  const [categories, setCategories] = useState([]);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "CLEAR_ALL" });
  }, []);

  useEffect(() => {
    if (params.categoryName) {
      dispatch({
        type: "SET_CATEGORY",
        payload: { item: { name: params.categoryName, checked: true } },
      });
    }
  }, [params, categories]);

  useEffect(() => {
    productService.getCategories().then((response) => {
      console.log({ response });
      setCategories(response.categories);
    });
  }, []);

  const handleFilterChange = (e, name) => {
    const { checked } = e.target;
    dispatch({ type: "SET_CATEGORY", payload: { item: { name, checked } } });
  };

  const handleRatingChange = (e) => {
    const { checked, id } = e.target;
    dispatch({ type: "SET_RATING", payload: { item: { id, checked } } });
  };

  const handleRangeChange = (e) => {
    dispatch({ type: "SET_RANGE", payload: e.target.value });
  };

  const handleSortByChange = (e) => {
    dispatch({ type: "SET_SORTBY", payload: e.target.value });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const isChecked = (value, key) => {
    return state[key].indexOf(value) >= 0;
  };

  return (
    <aside className="sidebar">
      <Box
        display="flex"
        direction="column"
        gap="md"
        alignItems="start"
        className="actions p-20"
      >
        <Box display="flex" gap="lg">
          <Button color="error" size="lg" outline onClick={clearAll}>
            Clear <RiSoundModuleLine className="mx-1 icon fs-1" />
          </Button>
        </Box>
      </Box>

      <section className="filter">
        <div className="group">
          <Box>
            <Box className="group-header  my-1">
              <Typography className="my-1" variant="h3">
                Category
              </Typography>
            </Box>
            <Box>
              {categories.map(({ _id, categoryName, count }, index) => (
                <Box key={index} display="flex">
                  <Checkbox
                    id={_id}
                    label={categoryName}
                    checked={isChecked(categoryName, "category")}
                    onChange={(e) => handleFilterChange(e, categoryName)}
                  />
                  <Box className="ml-auto">{count}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </div>
        <div className="group">
          <Typography className="my-1" variant="h3">
            Rating
          </Typography>
          {ratings.map((rating, index) => (
            <Box key={index} display="flex">
              <Checkbox
                label={rating.label}
                id={rating.id}
                checked={isChecked(rating.id, "rating")}
                onChange={(e) => handleRatingChange(e)}
              />
            </Box>
          ))}
        </div>

        <div className="group">
          <Typography className="my-1" variant="h3">
            Sort By Price
          </Typography>
          <Box display="flex" gap="sm" alignItems="center">
            <label>
              <Input
                type="radio"
                name="price"
                value="low"
                onChange={handleSortByChange}
                checked={isChecked("low", "sortByPrice")}
              />
              Low to High
            </label>
            <label>
              <Input
                type="radio"
                name="price"
                value="high"
                onChange={handleSortByChange}
                checked={isChecked("high", "sortByPrice")}
              />
              Hight to Low
            </label>
          </Box>
        </div>

        <div className="group">
          <Typography className="my-1" variant="h3">
            Price
          </Typography>
          <Input
            type="range"
            min={1000}
            max={10000}
            step={1000}
            value={state.range || 0}
            onChange={(e) => handleRangeChange(e)}
          />
          {state.range && <span> below {state.range}</span>}
        </div>
      </section>
    </aside>
  );
}
