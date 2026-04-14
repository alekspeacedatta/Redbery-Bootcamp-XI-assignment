export const SESSION_KEYS = {
  USER: ["user"],
  PROGRESS: ["course-in-progress"],
} as const;

export const COURSE_KEYS = {
  COURSE: (id : number) => ["course", id], 
  FEATURED: ["featured-courses"],
  ENROLLED: ["enrolled"],
} as const;

export const FILTERS_KEYS = {
  CATEGORIES: ["categories"],
  TOPICS: ["topics"],
  INSTRUCTORS: ["instructors"],
} as const;

export const SCHEDULE_KEYS = {
  WEEKLY_SCHEDULES: (id: number) => ["weekly-schedules", id],
  TIME_SLOTS: (id: number, weeklyScheduleId: number) => ["time-slots", id, weeklyScheduleId],
  SESSION_TYPES: (id: number, weeklyScheduleId: number, timeSlotId: number) => ["session-types", id, weeklyScheduleId, timeSlotId],
} as const;