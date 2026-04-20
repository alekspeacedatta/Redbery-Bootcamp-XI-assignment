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
  COURSE: ( id: number ) => `/courses/${id}`,
  COURSES: "/courses",
  FEATURED_COURSES: "/courses/featured",
  COURSES_IN_PROGRESS: "/courses/in-progress",
} as const;

export const FILTERS = {
  CATEGORIES: "/categories",
  TOPICS: "/topics",
  INSTUCTORS: "/instructors",
} as const;

export const SCHEDULE = {
  WEEKLY_SCHEDULE: ( id: number ) => `/courses/${id}/weekly-schedules`,
  TIME_SLOTS: ( id: number ) => `/courses/${id}/time-slots`,
  SESSION_TYPE: (id: number) => `/courses/${id}/session-types`
} as const

export const ENROLLMENTS = {
  ENROLLMENTS: '/enrollments',
  ENROLLMENTS_COMPLETE: (id : number) => `/enrollments/${id}/complete`,
}  as const