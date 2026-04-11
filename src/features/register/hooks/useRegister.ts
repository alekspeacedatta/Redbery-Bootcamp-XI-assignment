import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { useAuthStore, useUserStore } from "@/entities/session";
import { setToken } from "@/shared/api";
import { register, type RegisterResponse } from "../api/register.api";
import type { RegisterSchema } from "../model/register.schema";

export type LaravelValidationError = {
  message: string;
  errors?: Record<string, string[]>;
};

export const useRegister = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const closeModal = useAuthStore((state) => state.closeModal);

  return useMutation<
    RegisterResponse,
    AxiosError<LaravelValidationError>,
    RegisterSchema
  >({
    mutationFn: register,
    onSuccess: (response) => {
      setToken(response.data.token);
      setIsAuth(true);
      setUser(response.data.user);
      closeModal();
    },
    onError: (error) => {
      console.error("Registration Error:", error.response?.data);
    },
  });
};
