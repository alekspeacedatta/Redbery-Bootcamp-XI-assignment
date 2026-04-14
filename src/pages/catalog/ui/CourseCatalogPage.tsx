import { FilterForm } from "@/features/courses-filter";
import { Breadcrumb, MaxWidth } from "@/shared/ui";
import { CoursesCatalog } from "@/widgets/courses-catalog";

export const CourseCatalogPage = () => {
  return (
    <MaxWidth className="mt-17.25 pb-40.25">
      <div className="flex flex-col gap-8.5">
        {/* Navigation */}
        <Breadcrumb/>
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
