import { Button, MaxWidth } from "@/shared/ui";
import MockCourseInProgressList from "./MockCourseInProgressList";
import { useAuthStore, useUserStore } from "@/entities/session";
import { useGetCoursesInProgress } from "../hooks/useGetCoursesInProgress";
import { CourseInProgressCard } from "./CourseInProgressCard";

export const CoursesInProgress = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const { data, isLoading, isError } = useGetCoursesInProgress(isAuth);
  const toggleEnrolledCourses = useUserStore((state) => state.setEnrolledSidebar)
  const shouldHideSection =
    isAuth && (isLoading || isError || !data || data.length === 0);

  if (shouldHideSection) return null;

  return (
    <MaxWidth className="w-full">
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-[40px] text-[#0A0A0A] font-semibold leading-none">
            Continue Learning
          </h2>
          <div className="flex justify-between w-full items-center">
            <p className="text-xl text-[#3D3D3D] font-medium leading-none">
              Pick up where you left
            </p>
            <Button
              onClick={toggleEnrolledCourses}
              variant="link"
              className="text-xl text-[#4F46E5] font-medium leading-none underline"
            >
              See All
            </Button>
          </div>
        </div>

        {isAuth ? (
          <div className="grid grid-cols-3  gap-6">
            {data?.map((item) => (
              <CourseInProgressCard key={item.id} enrolledCourse={item} />
            ))}
          </div>
        ) : (
          <MockCourseInProgressList />
        )}
      </div>
    </MaxWidth>
  );
};
