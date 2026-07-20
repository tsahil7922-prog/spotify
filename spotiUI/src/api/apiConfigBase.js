import axios from "axios";

export const apiConfigBase = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

apiConfigBase.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await apiConfigBase.post("/auth/refresh");

        return apiConfigBase(originalRequest);

      } catch (err) {
        window.location.href = "/";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);