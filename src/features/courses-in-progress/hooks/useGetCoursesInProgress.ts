import { getCoursesInProgress } from "../api/get-courses-in-progress"
import { useQuery } from "@tanstack/react-query"

export const useGetCoursesInProgress = (enabled : boolean = true) => {
    return useQuery({
        queryKey: ['Courses In Progress'],
        queryFn: getCoursesInProgress,
        enabled: enabled,
    })
}