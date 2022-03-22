import React from "react";
import { filters, ratings } from "../product-data";
import { Box, Typography, Checkbox, Input } from "src/components";

export default function ProductFilter() {
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
                      id={sub.name}
                      label={sub.name}
                      onChange={() => console.log("on change")}
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
                onChange={() => console.log("on change")}
              />
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
  );
}
