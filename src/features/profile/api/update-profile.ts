import { apiInstance } from "@/shared/api";
import type { ProfileSchema } from "../model/profile-model";
import type { User } from "@/entities/session";

export const updateProfile = async ( profileData : ProfileSchema ) : Promise<{ data: User }> => {
    const formData = new FormData();
    formData.append('full_name', profileData.fullname);
    formData.append('mobile_number', profileData.mobileNumber);
    formData.append('age', String(profileData.age));

    if (profileData.avatar instanceof File) {
        formData.append('avatar', profileData.avatar)
    }

    const { data } = await apiInstance.put('/profile', formData, 
        {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        }
    )

    return data;
}