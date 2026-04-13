import { FilterForm } from "@/features/courses-filter";
import { MaxWidth } from "@/shared/ui";
import { CoursesCatalog } from "@/widgets/courses-catalog";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CourseCatalogPage = () => {
  return (
    <MaxWidth className="mt-17.25 pb-40.25">
      <div className="flex flex-col gap-8.5">
        {/* Navigation */}
        <div className="flex items-center gap-1.5">
          <Link
            to="/"
            className="text-lg text-[#666666] font-medium leading-none"
          >
            Home
          </Link>
          <FontAwesomeIcon icon={faArrowRight} className="text-[#666666]" />
          <Link
            to="/browse-courses"
            className="text-lg text-[#736BEA] font-medium leading-none"
          >
            Browse
          </Link>
        </div>
        {/* Filters and Courses Wrapper */}
        <div className="flex gap-22.5 items-start">
          {/* Filters */}
          <FilterForm />
          {/* Course Catalog */}
          <CoursesCatalog />
        </div>
      </div>
    </MaxWidth>
  );
};
