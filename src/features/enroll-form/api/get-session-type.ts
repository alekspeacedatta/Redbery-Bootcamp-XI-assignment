import type { SessionType } from "@/entities/schedule";
import { apiInstance } from "@/shared/api";
import { SCHEDULE } from "@/shared/api/api-endpoints";

interface GetSessionTypeResponse {
    data: SessionType[]
}
export const getSesstionType = async (id : number, weeklyScheduleId: number, timeSlotId: number) : Promise<SessionType[]> => {
    const { data } = await apiInstance.get<GetSessionTypeResponse>(SCHEDULE.SESSION_TYPE(id), {
        params: {
            weekly_schedule_id: weeklyScheduleId,
            time_slot_id: timeSlotId
        }
    });

    return data.data
}