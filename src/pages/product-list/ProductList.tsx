import React, { useEffect } from "react";
import { Wrapper } from "./ProductList.styled";
import axios from "axios";

export default function ProductList() {
  useEffect(() => {
    axios.get("/api/products").then((response) => console.log({ response }));
  }, []);

  return <Wrapper>ProductList</Wrapper>;
}
