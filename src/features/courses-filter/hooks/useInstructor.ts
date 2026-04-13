import { getInstructor } from "../api/get-instructor";
import { FILTERS_KEYS } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useInstructors = () => {
  return useQuery({
    queryKey: FILTERS_KEYS.INSTRUCTORS,
    queryFn: getInstructor,
  });
};
