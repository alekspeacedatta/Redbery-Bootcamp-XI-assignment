import type { AuthResponse } from "@/entities/session";
import type { RegisterSchema } from "../model/register.schema";
import { apiInstance } from "@/shared/api";

export type RegisterResponse = {
  data: AuthResponse;
};

export const register = async (
  registerData: RegisterSchema,
): Promise<RegisterResponse> => {
  const formData = new FormData();

  formData.append("email", registerData.email);
  formData.append("password", registerData.password);
  formData.append("password_confirmation", registerData.password_confirmation);
  formData.append("username", registerData.username);

  if (registerData.avatar instanceof File) {
    formData.append("avatar", registerData.avatar);
  }

  const { data } = await apiInstance.post<RegisterResponse>(
    "/register",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data;
};
