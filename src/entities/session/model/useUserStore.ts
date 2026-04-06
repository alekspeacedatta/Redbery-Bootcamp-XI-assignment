import type { User } from "./user.model";
import { create } from "zustand";

interface UserStoreType {
    user: User | null,
    setUser: ( user : User ) => void,
    cleanUser: () => void,
}
export const useUserStore = create<UserStoreType>((set) => ({
    user: null,
    setUser: ( user ) => {
        set({ user: user })
    },
    cleanUser: () => {
        set({ user: null })
    }
}))