import type { User } from "@/entities/session"
import { apiInstance } from "@/shared/api"



export const getMe = async () : Promise<User> => {
    const { data } = await apiInstance.get<User>('/me')

    return data
}