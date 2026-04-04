import { useQuery } from "@tanstack/react-query";
import { getFeaturedCourses } from "../api/get-featured-courses";

export const useGetFeaturedCourses = () => {
    return useQuery({
        queryKey: ['Featured Course'],
        queryFn: getFeaturedCourses
    })
}