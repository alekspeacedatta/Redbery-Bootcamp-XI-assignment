import { CourseCard } from "@/entities/course";
import { useCourses } from "../hooks/useCourses";
import { useState } from "react";
import { COURSE_SORT, type CoursesSort } from "../model/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SortSelect } from "@/widgets/courses-catalog/ui/SortSelect";
import { PaginationButton } from "../ui/PaginationButton";

export const CoursesCatalog = () => {
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<CoursesSort>(COURSE_SORT.NEWEST);

  const {
    data: coursesInfo,
    isLoading,
    isError,
    error,
  } = useCourses(sort, page);
  if (!coursesInfo) return null;

  const { lastPage, total } = coursesInfo.meta;
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

  return (
    // Courses Catalog Wrapper
    <div className="flex flex-col gap-8 w-[75.53%] justify-start min-h-screen">
      {/* Courses Catalog Header  */}
      <div className="flex items-center justify-between">
        <p className="text-[#666666] font-medium leading-6">
          {coursesInfo.data.length} out of {total}
        </p>
        <SortSelect value={sort} onChange={setSort} />
      </div>
      {/* Filtered Courses wrapper */}
      <div className="grid grid-cols-3 grid-row-4 gap-6 ">
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {/* Filtered courses */}
        {coursesInfo.data.length ? (
          coursesInfo.data.map((course) => (
            <CourseCard key={course.id} variant="sm" course={course} />
          ))
        ) : (
          <h2 className="text-5xl text-[#3D3D3D]">
            No Courses was Found - Try another filters
          </h2>
        )}
      </div>
      {/* Pagination Buttons */}
      <div className="flex items-center gap-2 justify-center">
        {/* Prev Button */}
        <PaginationButton
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </PaginationButton>
        {/* Middle Numbered Buttons  */}
        {pages.map((button) => (
          <PaginationButton
            onClick={() => setPage(button)}
            active={page === button}
            key={button}
          >
            {button}
          </PaginationButton>
        ))}
        {/* Next Button */}
        <PaginationButton
          onClick={() => setPage((p) => p + 1)}
          disabled={page === lastPage}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </PaginationButton>
      </div>
    </div>
  );
};
