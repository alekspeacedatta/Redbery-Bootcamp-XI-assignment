import { getToken } from "@/shared/api";
import { create } from "zustand";

type authStoreType = {
  authMode: 'login' | 'register' | null,
  isAuth: boolean;
  isModalOpen: boolean,
  closeModal: () => void;
  openModal: () => void;
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
  openModal: () => {
    set({ isModalOpen: true })
  },
  closeModal: () => {
    set({ isModalOpen: false })
  },
  setAuthMode: (mode) => {
    if(mode === 'login') {
      set({ authMode: mode })
    } else {
      set({ authMode: mode })
    }
  },
}));
