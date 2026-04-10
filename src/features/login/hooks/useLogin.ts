import { setToken } from "@/shared/api";
import { login, type LoginResponse } from "../api/login.api";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore, useUserStore } from "@/entities/session";
import type { AxiosError } from "axios";
import type { LoginSchema } from "../model/login.schema";

export const useLogin = () => {

    const setUser = useUserStore((state) => state.setUser);
    const setIsAuth = useAuthStore((state) => state.setIsAuth);
    const closeModal = useAuthStore((state) => state.closeModal);

    return useMutation<LoginResponse, AxiosError<{ message: string }>, LoginSchema>({
        mutationFn: login,
        onSuccess: ( response ) => {
            setToken(response.data.token);
            setIsAuth(true);
            setUser(response.data.user);
            closeModal();
        },
        onError: () => {
            console.log('error');
        }
    })
}