import authApi from "../api/authApi";

const authService = {
  register(userData) {
    return authApi.register(userData);
    try {
    } catch (err) {
      console.error("Error in authService.register:", err);
    }
  },

  login(credentials) {
    try {
      return authApi.login(credentials);
    } catch (err) {
      console.error("Error in authService.login:", err);
    }
  },
};

export default authService;
