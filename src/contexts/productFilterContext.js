import React, { useContext, useReducer } from "react";
import { initialState } from "src/reducers/productFilterReducer";

const FilterContext = React.createContext();

FilterContext.displayName = "ProductFilterContext";

const ProductFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    return state;
  }, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, ProductFilterProvider };
