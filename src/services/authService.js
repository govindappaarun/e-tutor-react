import Api from "./api";

export default {
  doLogin: async (login) => {
    try {
      const response = await Api.post("/api/auth/login", { ...login });
      if (response?.data?.foundUser) {
        return response.data;
      }
      throw new Error("user details not found");
    } catch (error) {
      throw error;
    }
  },

  doSignUp: async (signup) => {
    try {
      const response = await Api.post("/api/auth/signup", { ...signup });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
