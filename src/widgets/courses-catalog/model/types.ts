export const COURSE_SORT = {
  PRICE_ASC: "price_asc",
  PRICE_DESC: "price_desc",
  TITLE_ASC: "title_asc",
  POPULAR: "popular",
  NEWEST: "newest",
} as const;

export type CoursesSort = (typeof COURSE_SORT)[keyof typeof COURSE_SORT];

export type CourseFilters = {
  categoryIds?: number[];
  topicIds?: number[];
  instructorIds?: number[];
  sort?: CoursesSort;
  page?: number;
};
