import type { EnrolledCourseType } from "@/entities/enrolled";
import { Button } from "@/shared/ui";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CourseInProgressCardType = {
  enrolledCourse: EnrolledCourseType;
};
export const CourseInProgressCard = ({
  enrolledCourse,
}: CourseInProgressCardType) => {
  return (
    <div
      key={enrolledCourse.id}
      className="
        flex flex-col  gap-2 bg-[#FFFFFF] rounded-xl border-0.5
        border-[#B7B3F4] p-5 
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
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs text-[#141414] font-medium leading-none">
            {enrolledCourse.progress}% Complete
          </p>
          <div className="w-full h-3.75 bg-[#DDDBFA] rounded-[30px]">
            <div
              className={`w-[${String(enrolledCourse.progress)}%] bg-[#4F46E5] rounded-[30px] h-3.75`}
            ></div>
          </div>
        </div>
        <Button variant="outline" className="py-2.75 px-6.25">
          View
        </Button>
      </div>
    </div>
  );
};
