import type { Course } from "@/entities/course";
import { apiInstance } from "@/shared/api";

interface FeaturedCoursesResponse {
  data: Course[];
}

export const getFeaturedCourses = async (): Promise<Course[]> => {
  const { data } =
    await apiInstance.get<FeaturedCoursesResponse>("/courses/featured");

  return data.data;
};
