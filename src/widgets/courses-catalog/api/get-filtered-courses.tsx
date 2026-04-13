import type { Course } from "@/entities/course";
import { apiInstance, COURSES } from "@/shared/api";
import type { CourseFilters } from "../model/types";

interface FilteredCoursesResponse {
  data: Course[];
  meta: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const getFilteredCourses = async ({
  categoryIds = [],
  topicIds = [],
  instructorIds = [],
  sort = "newest",
  page,
}: CourseFilters): Promise<FilteredCoursesResponse> => {
  const { data } = await apiInstance.get<FilteredCoursesResponse>(
    COURSES.COURSES,
    {
      params: {
        "categories[]": categoryIds,
        "topics[]": topicIds,
        "instructors[]": instructorIds,
        sort,
        ...(page ? { page } : {}),
      },
    },
  );

  return data;
};
