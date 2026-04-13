import type { User } from "./user.model";
import { create } from "zustand";

interface UserStoreType {
  user: User | null;
  isProfileOpen: boolean;
  enrolledSidebar: boolean;
  setEnrolledSidebar: () => void;
  setIsProfileOpen: (value: boolean) => void;
  setUser: (userData: User) => void;
  cleanUser: () => void;
}
export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  isProfileOpen: false,
  enrolledSidebar: false,
  setEnrolledSidebar: () => {
    set((state) => ({ enrolledSidebar: !state.enrolledSidebar }));
  },
  setIsProfileOpen: (value) => {
    set({ isProfileOpen: value });
  },
  setUser: (userData) => {
    set({ user: userData });
  },
  cleanUser: () => {
    set({ user: null });
  },
}));
