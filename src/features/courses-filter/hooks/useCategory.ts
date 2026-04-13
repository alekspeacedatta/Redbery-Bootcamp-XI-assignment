import { getCategories } from "../api/get-categories";
import { FILTERS_KEYS } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useCategory = () => {
  return useQuery({
    queryKey: FILTERS_KEYS.CATEGORIES,
    queryFn: getCategories,
  });
};
