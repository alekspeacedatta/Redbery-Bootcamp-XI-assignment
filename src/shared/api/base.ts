import { getToken } from "./auth-token";
import { ENV } from "@/shared/config";
import axios from "axios";

export const apiInstance = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: 10000,
});
apiInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
