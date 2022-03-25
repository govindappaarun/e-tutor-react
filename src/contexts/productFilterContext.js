import React, { useContext, useReducer } from "react";
import {
  initialState,
  productFilterReducer,
} from "src/reducers/productFilterReducer";

const FilterContext = React.createContext();

FilterContext.displayName = "ProductFilterContext";

const ProductFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productFilterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, ProductFilterProvider };
