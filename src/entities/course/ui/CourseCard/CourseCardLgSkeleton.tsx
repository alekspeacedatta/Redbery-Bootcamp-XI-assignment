export const CourseCardLgSkeleton = () => {
  return (
    <div className="w-130.5 rounded-xl border border-[#F5F5F5] bg-[#FFFFFF] p-5 animate-pulse">
      <div className="flex h-full flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          {/* Image Placeholder */}
          <div className="h-65.5 w-full rounded-[10px] bg-gray-200" />

          {/* Instructor & Rating Placeholder */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              {/* Instructor text */}
              <div className="h-4 w-32 rounded bg-gray-200" />
              {/* Rating text */}
              <div className="h-4 w-12 rounded bg-gray-200" />
            </div>

            {/* Course Title Placeholder */}
            <div className="h-8 w-3/4 rounded bg-gray-200" />
          </div>

          {/* Description Placeholder (3 lines) */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>
        </div>

        {/* Action Section Placeholder */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* "Starting from" text */}
            <div className="h-3 w-16 rounded bg-gray-200" />
            {/* Price text */}
            <div className="h-10 w-24 rounded bg-gray-200" />
          </div>
          {/* Button Placeholder */}
          <div className="h-12 w-32 rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
};