import { useQuery } from "@tanstack/react-query";
import { getFeaturedCourses } from "../api/get-featured-courses";
import { COURSE_KEYS } from "@/shared/api";

export const useGetFeaturedCourses = () => {
    return useQuery({
        queryKey: COURSE_KEYS.FEATURED,
        queryFn: getFeaturedCourses
    })
}