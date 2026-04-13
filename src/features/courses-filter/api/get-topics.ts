import type { Topic } from "../model/filter.type";
import { apiInstance, FILTERS } from "@/shared/api";

interface GetTopicResponse {
  data: Topic[];
}

export const getTopics = async (): Promise<Topic[]> => {
  const { data } = await apiInstance<GetTopicResponse>(FILTERS.TOPICS);

  return data.data;
};
