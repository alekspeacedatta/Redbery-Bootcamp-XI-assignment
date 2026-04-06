import type { AuthResponse } from "@/entities/session"
import type { RegisterSchema } from "../model/register.schema"
import { apiInstance } from "@/shared/api"

export type RegisterResponse = {
    data: AuthResponse
}

export const register = async ( registerData : RegisterSchema ) : Promise<RegisterResponse> => {
    const { data } = await apiInstance.post<RegisterResponse>('/register', registerData)

    return data;
}