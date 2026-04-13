import { apiInstance, AUTH } from "@/shared/api";

export const logout = async () => {
  return await apiInstance.post(AUTH.LOGOUT);
};
