import { useAuthStore, useUserStore } from "@/entities/session";
import { useGetEnrolledCourses } from "../hooks/useGetEnrolledCourses";
import { Button, EmptyBoxIcon } from "@/shared/ui";
import { EnrolledCourseCard } from "./EnrolledCourseCard";

export const EnrolledSidebar = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const enrolledSidebar = useUserStore((state) => state.enrolledSidebar);
  const setEnrolledSidebar = useUserStore((state) => state.setEnrolledSidebar);
  const { data, isLoading, isError, error } = useGetEnrolledCourses(isAuth);

  if (!enrolledSidebar) return null;
  return (
    // Dimed Background
    <div
      className="
      flex fixed items-end z-20 justify-end h-screen w-screen bg-[#00000040]
      "
      onClick={setEnrolledSidebar}
    >
      {/* Actual SideBar */}
      <div
        className={`
          transition-all duration-300  h-screen
          bg-[#F5F5F5] pt-15 
        `}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Wrapper for Header and Courses */}
        <div className="flex flex-col gap-11.25 w-full h-full">
          {/* Enrolled SideBar Header */}
          <div className="flex items-center justify-between px-14.25">
            {/* Header */}
            <h3 className="text-[40px] text-[#0A0A0A] font-semibold leading-none">
              Enrolled Courses
            </h3>
            {/* Total Enrolls */}
            <p className="text-[#0A0A0A] font-medium leading-6">
              Total Enrollments
              <span className="font-semibold leading-none">
                {" "}
                {data?.length}
              </span>
            </p>
          </div>
          {/* Enrolled Courses */}
          {data?.length ? (
            <div className="flex flex-col gap-3 pl-[73.5px] pr-[97.5px] overflow-y-scroll">
              {isLoading && <p>Loading...</p>}
              {isError && <p>{error.message}</p>}
              {data.map((item) => (
                <EnrolledCourseCard enrolledCourse={item} key={item.id} />
              ))}
            </div>
          ) : (
            // Message if there is no Enrolled Courses
            <div className="flex justify-center items-center my-auto">
              <div className="flex flex-col gap-1 items-center">
                <img src={EmptyBoxIcon} alt="" />
                <div className="flex flex-col gap-4 items-center">
                  <div className="flex flex-col gap-2 items-center w-[65%]">
                    <h4 className="text-2xl text-[#130E67] font-semibold text-center leadingnone">
                      No Enrolled Courses Yet
                    </h4>
                    <p className="text-sm text-[#130E67] font-medium text-center leading-none">
                      Your learning journey starts here! Browse courses to get
                      started.
                    </p>
                  </div>
                  <Button variant="primary" className="h-14.5 px-6.25">
                    Browse Courses
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
