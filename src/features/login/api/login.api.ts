import type { AuthResponse } from "@/entities/session";
import type { LoginSchema } from "../model/login.schema";
import { apiInstance, AUTH } from "@/shared/api";

export type LoginResponse = {
  data: AuthResponse;
};

export const login = async (loginData: LoginSchema): Promise<LoginResponse> => {
  const { data } = await apiInstance.post<LoginResponse>(AUTH.LOGIN, loginData);

  return data;
};
