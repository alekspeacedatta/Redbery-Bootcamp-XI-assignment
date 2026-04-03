import { create } from "zustand";

type authStoreType = {
  isAuth: boolean;
  setIsAuth: () => void;
};

export const useAuthStore = create<authStoreType>((set) => ({
  isAuth: false,
  setIsAuth: () => {
    set((state) => ({ isAuth: !state.isAuth }));
  },
}));
