import type { EnrolledCourseType } from "@/entities/enrolled";
import { Button } from "@/shared/ui";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type CourseInProgressCardType = {
  enrolledCourse: EnrolledCourseType;
};
export const CourseInProgressCard = ({
  enrolledCourse,
}: CourseInProgressCardType) => {
  return (
    <div
      className="
        hover:border-[#958FEF] hover:shadow-[0px_0px_35px_0px_#8A82D440] duration-250
        hover:-translate-y-1.5 cursor-default
        flex flex-col  gap-2 bg-[#FFFFFF] rounded-xl border
        border-[#F5F5F5] p-5 col-span-1 
    "
    >
      {/* Course Image, lecturer, rate, name */}
      <div className="flex gap-4">
        {/* Course Image */}
        <img
          src={enrolledCourse.course.image}
          alt="Course Image"
          className="rounded-xl h-30.75"
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
                {enrolledCourse.course.avgRating}
              </p>
            </div>
          </div>
          <h4 className="text-xl text-[#141414] font-semibold leading-6">
            {enrolledCourse.course.title}
          </h4>
        </div>
      </div>
      {/* Course view button and progress bar */}
      <div className="flex gap-10 justify-between items-center">
        <div className="flex flex-col gap-1.5 w-full">
          <p className="text-xs text-[#141414] font-medium leading-none">
            {enrolledCourse.progress}% Complete
          </p>
          <div className="w-full h-3.75 bg-[#DDDBFA] rounded-[30px]">
            <div
              className={` bg-[#4F46E5] rounded-[30px] h-3.75`}
              style={{ width: `${enrolledCourse.progress}%` }}
            ></div>
          </div>
        </div>
        <Link to={`/courses/${enrolledCourse.id}`}>
          <Button variant="outline" className="py-2.75 px-6.25">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};
