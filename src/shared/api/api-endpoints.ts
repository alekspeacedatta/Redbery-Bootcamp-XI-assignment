export const AUTH = {
  REGISTER: "/register",
  LOGIN: "/login",
  LOGOUT: "/logout",
  ME: "/me",
} as const;

export const PROFILE = {
  PROFILE: "/profile",
} as const;

export const COURSES = {
  COURSES: "/courses",
  FEATURED_COURSES: "/courses/featured",
  COURSES_IN_PROGRESS: "/courses/in-progress",
} as const;

export const FILTERS = {
  CATEGORIES: "/categories",
  TOPICS: "/topics",
  INSTUCTORS: "/instructors",
} as const;
