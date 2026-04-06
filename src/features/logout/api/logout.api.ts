import { apiInstance } from "@/shared/api"

export const logout = async () => {
    return await apiInstance.post('/logout')
}