import { getTimeSlot } from "@/features/enroll-form/api/get-time-slot"
import { SCHEDULE_KEYS } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"

export const useTimeSlot = (id: number, weeklyScheduleId: number) => {
    return useQuery({
        queryKey: SCHEDULE_KEYS.TIME_SLOTS(id, weeklyScheduleId),
        queryFn: () => getTimeSlot(id, weeklyScheduleId),
        enabled: weeklyScheduleId !== 0,
    })
}