import type { Course } from "../../model/types";
import { Button } from "@/shared/ui";
import {
  faBriefcase,
  faBullhorn,
  faChain,
  faCode,
  faPaintBrush,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type CourseCardSmType = {
  course: Course;
};

export const CourseCardSm = ({ course }: CourseCardSmType) => {
  return (
    <div
      key={course.id}
      className="
        bg-[#FFFFFF] rounded-xl p-5 border border-[#F5F5F5] transition-all
        hover:-translate-y-1 cursor-default
        hover:border-[#958FEF] hover:shadow-[0px_0px_35px_0px_#8A82D440] duration-150
    "
    >
      <div className="flex flex-col gap-4.5 h-full justify-between">
        <div className="flex flex-col gap-4.5 items-start">
          {/* Image */}
          <img
            src={course.image}
            alt="Course Image"
            className="rounded-[10px] h-45.5 object-cover w-full"
          />
          {/* Course Text (Lector, rate, description, ...) */}
          <div className="flex flex-col gap-3">
            {/* Course Duration and Rate */}
            <div className="flex justify-between">
              {/* Duration */}
              <p className="text-sm text-[#8A8A8A] font-medium leading-none">
                {course.instructor.name} | {course.durationWeeks} weeks
              </p>
              {/* Rate */}
              <p className="text-sm text-[#525252] font-medium">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 mr-1"
                />
                {course.avgRating}
              </p>
            </div>
            {/* Course Name */}
            <h3 className="text-2xl text-[#0A0A0A] font-semibold leading-none">
              {course.title}
            </h3>
          </div>
          {/* Course Category */}
          <div
            className="
                   bg-[#F5F5F5] text-[#525252] py-2 px-3 text-base
                     font-medium leading-6 rounded-xl flex items-center gap-1.5
                  "
          >
            <FontAwesomeIcon
              icon={
                course.category.icon === "development"
                  ? faCode
                  : course.category.icon === "design"
                    ? faPaintBrush
                    : course.category.icon === "buisness"
                      ? faBriefcase
                      : course.category.icon === "marketing"
                        ? faBullhorn
                        : faChain
              }
              className="mt-05"
            />
            {course.category.name}
          </div>
        </div>
        {/* Course Action (price and button) */}
        <div className="flex justify-between courses-center">
          {/* Price */}
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-[#8A8A8A] font-medium leading-none">
              Starting From
            </p>
            <p className="text-2xl text-[#292929] font-semibold leading-none">
              ${course.basePrice}
            </p>
          </div>
          {/* Details Button */}
          <Link to={`/courses/${course.id}`} state={{ from: "browse" }}>
            <Button
              variant="primary"
              className="py-3 px-6.25 leading-6 font-medium"
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};