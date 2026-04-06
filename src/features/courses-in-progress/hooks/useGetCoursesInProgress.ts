import { SESSION_KEYS } from "@/shared/api"
import { getCoursesInProgress } from "../api/get-courses-in-progress"
import { useQuery } from "@tanstack/react-query"

export const useGetCoursesInProgress = (enabled : boolean = true) => {
    return useQuery({
        queryKey: SESSION_KEYS.PROGRESS,
        queryFn: getCoursesInProgress,
        enabled: enabled,
    })
}