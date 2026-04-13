import type { EnrolledCourseType } from "@/entities/enrolled";
import { apiInstance, COURSES } from "@/shared/api";

interface EnrolledCourseResponse {
  data: EnrolledCourseType[];
}

export const getCoursesInProgress = async (): Promise<EnrolledCourseType[]> => {
  const { data } = await apiInstance.get<EnrolledCourseResponse>(
    COURSES.COURSES_IN_PROGRESS,
  );

  return data.data;
};
