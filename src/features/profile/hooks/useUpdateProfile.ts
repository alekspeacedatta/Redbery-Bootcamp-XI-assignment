import { useUserStore } from "@/entities/session"
import { updateProfile } from "..//api/update-profile"
import { useMutation } from "@tanstack/react-query"

export const useUpdateProfile = () => {
    const setUser = useUserStore((state) => state.setUser);
    const setIsProfileOpen = useUserStore((state) => state.setIsProfileOpen);

    return useMutation({
        mutationFn: updateProfile,
        onSuccess: (data) => {
            setUser(data.data);
            setIsProfileOpen(false);
        }
    })
}