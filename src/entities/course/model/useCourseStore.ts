import { create } from "zustand";

interface CourseStoreProps {
    coursePrice: number,
    setCoursePrice: (value: number) => void;
    updateCoursePrice: (id: number) => void;
}

export const useCourseStore = create<CourseStoreProps>((set) => ({
    coursePrice: 0,
    setCoursePrice: ( value : number ) => {
        set({ coursePrice: value })
    },
    updateCoursePrice: ( priceModifier: number ) => {
        set((state) => ({ coursePrice: state.coursePrice + priceModifier}))
    }
}))