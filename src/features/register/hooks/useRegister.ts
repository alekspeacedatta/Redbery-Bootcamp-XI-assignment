import { useAuthStore, useUserStore } from "@/entities/session";
import { register, type RegisterResponse } from "../api/register.api"
import { useMutation } from "@tanstack/react-query"
import { setToken } from "@/shared/api";
import type { AxiosError } from "axios";
import type { RegisterSchema } from "../model/register.schema";

export const useRegister = () => {

    const setUser = useUserStore((state) => state.setUser);
    const setIsAuth = useAuthStore((state) => state.setIsAuth);
    const closeModal = useAuthStore((state) => state.closeModal);

    return useMutation<RegisterResponse, AxiosError<{ message: string }>, RegisterSchema>({
        mutationFn: register,
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