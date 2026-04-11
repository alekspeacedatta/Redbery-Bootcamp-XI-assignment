import { COURSE_KEYS } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { getEnrolledCourses } from "../api/get-enrolled-courses"

export const useGetEnrolledCourses = ( isAuth: boolean ) => {
    return useQuery({
        queryKey: COURSE_KEYS.ENROLLED,
        queryFn: getEnrolledCourses,
        enabled: isAuth
    })
}