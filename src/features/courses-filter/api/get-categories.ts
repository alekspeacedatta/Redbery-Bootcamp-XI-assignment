import { apiInstance, FILTERS } from "@/shared/api";
import type { Category } from "../model/filter.type";

interface GetCategoriesResponse {
  data: Category[];
}

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await apiInstance.get<GetCategoriesResponse>(
    FILTERS.CATEGORIES,
  );

  return data.data;
};
