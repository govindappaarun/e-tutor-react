import Api from "./api";

export default {
  addToCart: async (product) => {
    try {
      const response = await Api.post("/api/user/cart", { product });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeFromCart: async ({ _id }) => {
    try {
      const response = await Api.delete(`/api/user/cart/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addToWishlist: async (product) => {
    try {
      const response = await Api.post(`/api/user/wishlist`, { product });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeFromWishlist: async ({ _id }) => {
    try {
      const response = await Api.delete(`/api/user/wishlist/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
