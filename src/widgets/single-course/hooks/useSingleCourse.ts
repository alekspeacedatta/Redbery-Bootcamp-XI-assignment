import { COURSE_KEYS } from "@/shared/api"
import { getSingleCourse } from "../api/get-single-course"
import { useQuery } from "@tanstack/react-query"

export const useSingleCourse = ( id: number ) => {
    return useQuery({
        queryKey: COURSE_KEYS.COURSE(id),
        queryFn: () => getSingleCourse(id),
    })
}