import type { EnrolledCourseType } from "@/entities/enrolled";
import { apiInstance, ENROLLMENTS } from "@/shared/api";

interface EnrolledCourseResponse {
  data: EnrolledCourseType[];
}

export const getEnrolledCourses = async (): Promise<EnrolledCourseType[]> => {
  const { data } =
    await apiInstance.get<EnrolledCourseResponse>(ENROLLMENTS.ENROLLMENTS);

  return data.data;
};
