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

  logOut() {
    try {
      return authApi.logout();
    } catch (err) {
      console.error("Error in authService.logout:", err);
    }
  },

  refreshToken() {
    try {
      return authApi.refreshToken();
    } catch (err) {
      console.log(err, "refrsh");
    }
  },
};

export default authService;
