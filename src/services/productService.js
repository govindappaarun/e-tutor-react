import axios from "axios";
import Api from "./api";

export default {
  getProducts: async () => {
    try {
      const response = await Api.get("/api/products");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await Api.get("/api/categories");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
