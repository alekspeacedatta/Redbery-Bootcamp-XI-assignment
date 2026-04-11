import type { Course } from "../../model/types";
import { Button } from "@/shared/ui";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CourseCardLgType = {
  course: Course;
};

const CourseCardLg = ({ course }: CourseCardLgType) => {
  return (
    <div
      className="
      bg-[#FFFFFF] rounded-xl p-5 border border-[#F5F5F5] transition-all
        hover:border-[#958FEF] hover:shadow-[0px_0px_35px_0px_#8A82D440] duration-300
    "
    >
      <div className="flex flex-col justify-between h-full gap-6">
        <div className="flex flex-col gap-4">
          {/* Image */}
          <img
            src={course.image}
            alt="Course Image"
            className="rounded-[10px] h-65.5 object-cover"
          />
          {/* Course Text (Lector, rate, description, name, ...) */}
          <div className="flex flex-col gap-3">
            {/* Course Lectore and Rate */}
            <div className="flex justify-between">
              <p className="text-sm text-[#8A8A8A] font-medium leading-none">
                Lecture
                <span className="text-[#666666]">
                  {" "}
                  {course.instructor.name}
                </span>
              </p>
              <p className="text-sm text-[#525252] font-medium leading-none">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 mr-1"
                />
                {course.avgRating}
              </p>
            </div>
            {/* Course Name */}
            <h3 className="text-2xl text-[#141414] font-semibold leading-none">
              {course.title}
            </h3>
          </div>
          {/* Course Description */}
          <p className="text-[#666666] font-medium leading-6 text-base">
            {course.description}
          </p>
        </div>
        {/* Course Action (price and button) */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <div className="flex items-center gap-2">
            <p className="text-xs text-[#8A8A8A] font-medium leading-none mt-0.75">
              Starting From
            </p>
            <p className="text-[32px] text-[#141414] font-semibold leading-none">
              ${course.basePrice}
            </p>
          </div>
          {/* Details Button */}
          <Button
            variant="primary"
            className="h-12 px-6.25 text-xl leading-none font-medium"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCardLg;
