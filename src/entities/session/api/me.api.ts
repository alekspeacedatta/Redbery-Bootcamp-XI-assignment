import type { MeResponse, User } from "@/entities/session"
import { apiInstance } from "@/shared/api"



export const getMe = async () : Promise<User> => {
    const { data } = await apiInstance.get<MeResponse>('/me')

    return data.data
}