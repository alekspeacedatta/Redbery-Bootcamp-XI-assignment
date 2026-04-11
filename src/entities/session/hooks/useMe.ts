import { removeToken, SESSION_KEYS } from "@/shared/api";
import { useAuthStore } from "../model/useAuthStore";
import { useUserStore } from "../model/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/me.api";
import { useEffect } from "react";

export const useMe = () => {
  const clearUser = useUserStore((state) => state.cleanUser);
  const setUser = useUserStore((state) => state.setUser);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const isAuth = useAuthStore((state) => state.isAuth);

  const query = useQuery({
    queryKey: SESSION_KEYS.USER,
    queryFn: getMe,
    enabled: isAuth,
    staleTime: Infinity,
  });
  useEffect(() => {
    if (query.data) {
      setUser(query.data);
      setIsAuth(true);
    }
    if (query.isError) {
      clearUser();
      setIsAuth(false);
      removeToken();
    }
  }, [query.data, setUser, setIsAuth, clearUser, query.isError]);

  return query;
};
