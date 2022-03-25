import React from "react";
import { filters, ratings } from "../product-data";
import { Box, Typography, Checkbox, Input } from "src/components";
import { useFilter } from "src/contexts/productFilterContext";

export default function ProductFilter() {
  const { state, dispatch } = useFilter();

  const handleFilterChange = (e) => {
    const { checked, id } = e.target;
    dispatch({ type: "SET_COURSE_TYPE", payload: { item: { id, checked } } });
  };

  const handleRatingChange = (e) => {
    const { checked, id } = e.target;
    dispatch({ type: "SET_RATING", payload: { item: { id, checked } } });
  };

  const handleRangeChange = (e) => {
    dispatch({ type: "SET_RANGE", payload: e.target.value });
  };

  const isChecked = (id, key) => {
    return state[key].indexOf(id) >= 0;
  };

  return (
    <aside className="sidebar">
      <section className="filter">
        <div className="group">
          {filters.map((filter) => (
            <Box key={filter.filterName}>
              <Box className="group-header  my-1">
                <Typography className="my-1" variant="h3">
                  {filter.filterName}
                </Typography>
              </Box>
              <Box>
                {filter.subFilters.map((sub, index) => (
                  <Box key={index} display="flex">
                    <Checkbox
                      id={sub.id}
                      label={sub.name}
                      checked={isChecked(sub.id, "courseType")}
                      onChange={(e) => handleFilterChange(e)}
                    />
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
              <Checkbox
                label={rating.label}
                id={rating.id}
                checked={isChecked(rating.id, "rating")}
                onChange={(e) => handleRatingChange(e)}
              />
              <Box className="ml-auto">{rating.count}</Box>
            </Box>
          ))}
        </div>
        <div className="group">
          <Typography className="my-1" variant="h3">
            Price
          </Typography>
          <Input
            type="range"
            min={1000}
            max={10000}
            value={+state.range}
            onChange={(e) => handleRangeChange(e)}
          />
        </div>
      </section>
    </aside>
  );
}
