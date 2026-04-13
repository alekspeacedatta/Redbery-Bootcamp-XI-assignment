export const SESSION_KEYS = {
  USER: ["user"],
  PROGRESS: ["course-in-progress"],
} as const;

export const COURSE_KEYS = {
  FEATURED: ["featured-courses"],
  ENROLLED: ["enrolled"],
} as const;

export const FILTERS_KEYS = {
  CATEGORIES: ["categories"],
  TOPICS: ["topics"],
  INSTRUCTORS: ["instructors"],
} as const;
