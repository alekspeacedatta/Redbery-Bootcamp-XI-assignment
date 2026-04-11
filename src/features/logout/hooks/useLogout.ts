import { useAuthStore, useUserStore } from "@/entities/session";
import { logout } from "../api/logout.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeToken, SESSION_KEYS } from "@/shared/api";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const clearUser = useUserStore((state) => state.cleanUser);

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeToken();
      setIsAuth(false);
      clearUser();
      queryClient.removeQueries({ queryKey: SESSION_KEYS.PROGRESS });
      queryClient.removeQueries({ queryKey: SESSION_KEYS.USER });
      window.location.href = "/";
    },
    onError: (error) => {
      console.error("Logout Error", error);
      removeToken();
      setIsAuth(false);
      clearUser();
    },
  });
};
