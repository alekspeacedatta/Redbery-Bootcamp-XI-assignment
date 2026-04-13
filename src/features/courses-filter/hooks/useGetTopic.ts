import { getTopics } from "../api/get-topics";
import { FILTERS_KEYS } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useTopic = () => {
  return useQuery({
    queryKey: FILTERS_KEYS.TOPICS,
    queryFn: getTopics,
  });
};
