import type { EnrolledCourseType } from "@/entities/enrolled"
import { apiInstance } from "@/shared/api"

interface EnrolledCourseResponse {
    data: EnrolledCourseType[]
}

export const getCoursesInProgress = async () : Promise<EnrolledCourseType[]> => {
    const { data } = await apiInstance.get<EnrolledCourseResponse>("/courses/in-progress")

    return data.data
}