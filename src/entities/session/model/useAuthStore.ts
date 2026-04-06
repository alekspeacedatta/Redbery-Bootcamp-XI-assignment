import { getToken } from "@/shared/api";
import { create } from "zustand";

type authStoreType = {
  authMode: 'login' | 'register' | null,
  isAuth: boolean;
  isModalOpen: boolean,
  closeModal: () => void;
  toggleIsAuth: () => void;
  setIsAuth: ( isAuth: boolean ) => void,
  setAuthMode: ( mode : 'login' | 'register'  ) => void;
};

export const useAuthStore = create<authStoreType>((set) => ({
  isModalOpen: false,
  authMode: null,
  isAuth: !!getToken(), 
  setIsAuth: ( isAuth ) => {
    set({ isAuth: isAuth });
  },
  toggleIsAuth: () => {
    set((state) => ({ isAuth: !state.isAuth }));
  },
  closeModal: () => {
    set({ isModalOpen: false })
  },
  setAuthMode: (mode) => {
    if(mode === 'login') {
      set({ authMode: mode, isModalOpen: true })
    } else {
      set({ authMode: mode, isModalOpen: true })
    }
  },
}));
