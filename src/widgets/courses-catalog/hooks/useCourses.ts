import { useCoursesFilterStore } from "@/entities/course";
import type { CoursesSort } from "../model/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getFilteredCourses } from "../api/get-filtered-courses";

export const useCourses = (sort: CoursesSort = "newest", page = 1) => {
  const categoryIds = useCoursesFilterStore((state) => state.categoryIds);
  const topicIds = useCoursesFilterStore((state) => state.topicIds);
  const instructorIds = useCoursesFilterStore((state) => state.instructorIds);

  return useQuery({
    queryKey: ["courses", categoryIds, topicIds, instructorIds, sort, page],
    queryFn: () =>
      getFilteredCourses({
        categoryIds,
        topicIds,
        instructorIds,
        sort,
        page,
      }),
    placeholderData: keepPreviousData,
  });
};
