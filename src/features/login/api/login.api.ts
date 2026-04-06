import type { AuthResponse } from "@/entities/session"
import type { LoginSchema } from "../model/login.schema"
import { apiInstance } from "@/shared/api"

export type LoginResponse = {
    data: AuthResponse
}

export const login = async ( loginData : LoginSchema) : Promise<LoginResponse> => {
    const { data } = await apiInstance.post<LoginResponse>('/login', loginData)

    return data;
}