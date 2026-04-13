import { create } from "zustand";

interface CoursesFilterState {
  categoryIds: number[];
  topicIds: number[];
  instructorIds: number[];
  setCategoryId: (id: number) => void;
  removeCategoryId: (id: number) => void;
  setTopicId: (id: number) => void;
  removeTopicId: (id: number) => void;
  setInstructorId: (id: number) => void;
  removeInstructorId: (id: number) => void;
  removeAllFiltersIds: () => void;
}
export const useCoursesFilterStore = create<CoursesFilterState>((set) => ({
  categoryIds: [],
  topicIds: [],
  instructorIds: [],
  setTopicId: (id: number) => {
    set((state) => ({ topicIds: [...state.topicIds, id] }));
  },
  removeTopicId: (id: number) => {
    set((state) => ({
      topicIds: state.topicIds.filter((topicId) => topicId !== id),
    }));
  },
  setInstructorId: (id: number) => {
    set((state) => ({ instructorIds: [...state.instructorIds, id] }));
  },
  removeInstructorId: (id: number) => {
    set((state) => ({
      instructorIds: state.instructorIds.filter(
        (instructorId) => instructorId !== id,
      ),
    }));
  },
  setCategoryId: (id: number) =>
    set((state) => ({ categoryIds: [...state.categoryIds, id] })),
  removeCategoryId: (id: number) =>
    set((state) => ({
      categoryIds: state.categoryIds.filter((catId) => catId !== id),
    })),
  removeAllFiltersIds: () => {
    set({ categoryIds: [], topicIds: [], instructorIds: [] });
  },
}));
