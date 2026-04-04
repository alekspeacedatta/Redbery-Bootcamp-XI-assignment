import { CourseCard } from "@/entities/course"
import { useGetFeaturedCourses } from "../hooks/useGetFeaturedCourses"
import { MaxWidth } from "@/shared/ui"

export const FeaturedCourseList = () => {
    const { data, isLoading, isError, error } = useGetFeaturedCourses()
    return (
        <MaxWidth>
        <div className="flex flex-col gap-8 ">
            <div className="flex flex-col">
                <h2 className="text-[40px] font-semibold text-[#0A0A0A] leading-11">
                    Start Learning Today
                </h2>
                <p className="text-lg text-[#3D3D3D] leading-6.5">
                    Choose from our most popular courses and begin your journey
                </p>
            </div>

            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p className='text-red-500'>{error.message}</p>
            ) : (
                <div className='grid grid-cols-3 gap-6'>
                    {data?.map((item) => (
                        <CourseCard key={item.id} variant='lg' course={item} />
                    ))}
                </div>
            )}
        </div>
    </MaxWidth>
  )
}