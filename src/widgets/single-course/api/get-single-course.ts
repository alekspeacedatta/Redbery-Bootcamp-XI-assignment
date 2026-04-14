import { apiInstance, COURSES } from "@/shared/api";
import type { SingleCourse } from "../model/course.types";

interface GetSingleCourseResponse {
    data: SingleCourse
}
export const getSingleCourse = async ( id: number ) : Promise<SingleCourse> => {
    const { data } = await apiInstance.get<GetSingleCourseResponse>(COURSES.COURSE(id))

    return data.data
}