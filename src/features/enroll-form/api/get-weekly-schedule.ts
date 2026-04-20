import type { WeeklySchedule } from "@/entities/schedule";
import { apiInstance } from "@/shared/api";
import { SCHEDULE } from "@/shared/api/api-endpoints";

interface GetWeeklyScheduleRespone {
    data: WeeklySchedule[]
}
export const getWeeklySchedule = async (id: number) : Promise<WeeklySchedule[]> => {
    const { data } = await apiInstance.get<GetWeeklyScheduleRespone>(SCHEDULE.WEEKLY_SCHEDULE(id));

    return data.data;
}