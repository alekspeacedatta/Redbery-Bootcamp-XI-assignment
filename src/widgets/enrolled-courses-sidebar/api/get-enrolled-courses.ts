import type { EnrolledCourseType } from "@/entities/enrolled";
import { apiInstance } from "@/shared/api";

interface EnrolledCourseResponse {
  data: EnrolledCourseType[];
}

export const getEnrolledCourses = async (): Promise<EnrolledCourseType[]> => {
  const { data } =
    await apiInstance.get<EnrolledCourseResponse>("/enrollments");

  return data.data;
};
