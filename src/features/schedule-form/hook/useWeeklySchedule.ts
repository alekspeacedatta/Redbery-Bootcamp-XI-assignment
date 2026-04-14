import { getWeeklySchedule } from "@/features/schedule-form/api/get-weekly-schedule"
import { SCHEDULE_KEYS } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"

export const useWeeklySchedule = (id: number) => {
    return useQuery({
        queryKey: SCHEDULE_KEYS.WEEKLY_SCHEDULES(id),
        queryFn: () => getWeeklySchedule(id),
        enabled: !!id
    })
}