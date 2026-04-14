import type { EnrolledCourseType } from "@/entities/enrolled";
import { useUserStore } from "@/entities/session";
import { Button } from "@/shared/ui";
import {
  faCalendarAlt,
  faClock,
  faDotCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type EnrolledCourseCardType = {
  enrolledCourse: EnrolledCourseType;
};

export const EnrolledCourseCard = ({
  enrolledCourse,
}: EnrolledCourseCardType) => {
  const scheduleInfo = [
    {
      icon: faCalendarAlt,
      value: enrolledCourse.schedule.weeklySchedule.label,
    },
    { icon: faClock, value: enrolledCourse.schedule.timeSlot.label },
    { icon: faPeopleGroup, value: enrolledCourse.schedule.sessionType.name },
    {
      icon: faDotCircle,
      value:
        enrolledCourse.schedule.location || "No location (Online sessions)",
    },
  ];

  const setEnrolledSidebar = useUserStore((state) => state.setEnrolledSidebar)
  return (
    <div
      className="
        hover:-translate-y-1 cursor-default duration-200
        hover:border-[#958FEF] hover:shadow-[0px_0px_35px_0px_#8A82D440]
        flex flex-col  gap-2 bg-[#FFFFFF] rounded-xl border-0.5
        border-[#B7B3F4] p-5 col-span-1 
    "
    >
      {/* Course Image, lecturer, rate, name */}
      <div className="flex gap-4.5">
        {/* Course Image */}
        <img
          src={enrolledCourse.course.image}
          alt="Course Image"
          className="rounded-xl h-47.75"
        />
        {/* Course Lecturer, rate, Name */}
        <div className="flex flex-col gap-2.25">
          <div className="flex items-center justify-between">
            {/* Lecturer */}
            <p className="text-sm text-[#8A8A8A] font-medium leading-none">
              Lecturer{` `}
              <span className="text-[#666666]">
                {enrolledCourse.course.instructor.name}
              </span>
            </p>
            {/* rate */}
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <p className="text-sm text-[#525252] font-medium leading-none">
                {enrolledCourse.course.avgRating} 3.4
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* Course Title */}
            <h4 className="text-xl text-[#141414] font-semibold leading-6">
              {enrolledCourse.course.title}
            </h4>
            {/* Properties Mapping (session type, location, week, schedule) */}
            <div className="flex flex-col">
              {scheduleInfo.map((item) => (
                <p className="text-sm text-[#666666] leading-6.5">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[#525252] mr-1"
                  />
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Course view button and progress bar */}
      <div className="flex gap-10 justify-between items-center">
        <div className="flex flex-col gap-1 w-full">
          {/* n% is completed   */}
          <p className=" text-[#141414] font-medium leading-6">
            {enrolledCourse.progress}% Complete
          </p>
          {/* Progress Bar */}
          <div className="w-full h-3.75 bg-[#DDDBFA] rounded-[30px]">
            <div
              className={` bg-[#4F46E5] rounded-[30px] h-3.75`}
              style={{ width: `${enrolledCourse.progress}%` }}
            ></div>
          </div>
        </div>
        <Link to={`/courses/${enrolledCourse.id}`}> 
          <Button
            onClick={setEnrolledSidebar}
            variant="outline"
            className="py-2.75 px-10 font-medium leading-6 "
          >
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};
