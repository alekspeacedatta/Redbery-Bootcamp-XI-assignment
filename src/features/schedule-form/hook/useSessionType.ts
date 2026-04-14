import { getSesstionType } from "@/features/schedule-form/api/get-session-type"
import { SCHEDULE_KEYS } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"

export const useSessionType = (id: number, weeklyScheduleId: number, timeSlotId: number) => {
    return useQuery({
        queryKey: SCHEDULE_KEYS.SESSION_TYPES(id, weeklyScheduleId, timeSlotId),
        queryFn: () =>  getSesstionType(id, weeklyScheduleId, timeSlotId),
        enabled: !!id && weeklyScheduleId !== 0 && timeSlotId !== 0
    })
}