import { apiInstance, FILTERS } from "@/shared/api";
import type { Instructor } from "../model/filter.type";

interface GetIntstructorResponse {
  data: Instructor[];
}
export const getInstructor = async (): Promise<Instructor[]> => {
  const { data } = await apiInstance.get<GetIntstructorResponse>(
    FILTERS.INSTUCTORS,
  );

  return data.data;
};
