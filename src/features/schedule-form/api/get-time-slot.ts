import type { TimeSlot } from "@/entities/schedule";
import { apiInstance } from "@/shared/api";
import { SCHEDULE } from "@/shared/api/api-endpoints";

interface GetTimeSlotResponse {
    data: TimeSlot[]
}

export const getTimeSlot = async (id: number, weeklyScheduleId: number) : Promise<TimeSlot[]> => {
    const { data } = await apiInstance.get<GetTimeSlotResponse>(SCHEDULE.TIME_SLOTS(id), {
        params: {
            weekly_schedule_id: weeklyScheduleId
        }
    });

    return data.data;
}