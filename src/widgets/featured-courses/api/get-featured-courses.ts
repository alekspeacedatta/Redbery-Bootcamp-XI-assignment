import type { Course } from "@/entities/course";
import { apiInstance, COURSES } from "@/shared/api";

interface FeaturedCoursesResponse {
  data: Course[];
}

export const getFeaturedCourses = async (): Promise<Course[]> => {
  const { data } = await apiInstance.get<FeaturedCoursesResponse>(
    COURSES.FEATURED_COURSES,
  );

  return data.data;
};
