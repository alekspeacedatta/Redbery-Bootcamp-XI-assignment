import {
  faBriefcase,
  faBullhorn,
  faChain,
  faCode,
  faPaintBrush,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FilterWrapper } from "./FilterWrapper";

import { useTopic } from "../hooks/useGetTopic";
import { useCategory } from "../hooks/useCategory";
import { useInstructors } from "../hooks/useInstructor";
import { useCoursesFilterStore } from "@/entities/course";

export const FilterForm = () => {
  const removeAllFilterIds = useCoursesFilterStore(
    (state) => state.removeAllFiltersIds,
  );

  const categoryIds = useCoursesFilterStore((state) => state.categoryIds);
  const setCategoryId = useCoursesFilterStore((state) => state.setCategoryId);
  const removeCategoryId = useCoursesFilterStore(
    (state) => state.removeCategoryId,
  );

  const topicIds = useCoursesFilterStore((state) => state.topicIds);
  const setTopicId = useCoursesFilterStore((state) => state.setTopicId);
  const removeTopicId = useCoursesFilterStore((state) => state.removeTopicId);

  const instructorIds = useCoursesFilterStore((state) => state.instructorIds);
  const setInstructorId = useCoursesFilterStore(
    (state) => state.setInstructorId,
  );
  const removeInstructorId = useCoursesFilterStore(
    (state) => state.removeInstructorId,
  );

  const { data: categories } = useCategory();
  const { data: topics } = useTopic();
  const { data: instructors } = useInstructors();

  if (!categories || !topics || !instructors) {
    return <div>Loading...</div>;
  }

  return (
    // Filters Wrapper
    <div
      className="flex flex-col gap-8 w-[20%] sticky top-8 max-h-screen overflow-y-auto 
        scrollbar-none
    "
    >
      {/* Filters Header */}
      <div className="flex justify-between">
        <h2 className="text-5xl text-[#0A0A0A] font-semibold leading-none">
          Filters
        </h2>
        {categoryIds.length || topicIds.length || instructorIds.length ? (
          <div
            className=" flex items-center gap-1
                group 
            "
          >
            <button
              className="
                text-[#8A8A8A] mt-2 font-medium leading-6 cursor-pointer
                 transform-color duration-200 group-hover:text-[#281ED2]
                "
              onClick={removeAllFilterIds}
            >
              Clear All Filters
            </button>
            <FontAwesomeIcon
              icon={faX}
              className="
                    leading-6 mt-2.5 text-[#8A8A8A] text-sm
                    group-hover:text-[#281ED2]
                "
            />
          </div>
        ) : null}
      </div>
      {/* Filters Wrapper */}
      <div className="flex flex-col gap-14">
        {/* Filter By Catergories */}
        <section className="flex flex-col gap-6">
          <label className="text-lg text-[#666666] font-medium leading-none">
            Categories
          </label>
          {/* Categories Wrapper */}
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <FilterWrapper
                selected={categoryIds.includes(item.id)}
                setId={setCategoryId}
                removeId={removeCategoryId}
                itemId={item.id}
                key={item.id}
              >
                <FontAwesomeIcon
                  icon={
                    item.icon === "development"
                      ? faCode
                      : item.icon === "design"
                        ? faPaintBrush
                        : item.icon === "buisness"
                          ? faBriefcase
                          : item.icon === "marketing"
                            ? faBullhorn
                            : faChain
                  }
                />
                {item.name}
              </FilterWrapper>
            ))}
          </div>
        </section>
        {/* Filter By Topics */}
        <section className="flex flex-col gap-6">
          <label className="text-lg text-[#666666] font-medium leading-none">
            Topics
          </label>
          {/* Topics Wrapper */}
          <div className="flex flex-wrap gap-2">
            {topics
              .filter(
                (item) =>
                  !categoryIds.length || categoryIds.includes(item.categoryId),
              )
              .map((item) => (
                <FilterWrapper
                  selected={topicIds.includes(item.id)}
                  key={item.id}
                  itemId={item.id}
                  setId={setTopicId}
                  removeId={removeTopicId}
                >
                  {item.name}
                </FilterWrapper>
              ))}
          </div>
        </section>
        {/* Filter By Instructors */}
        <section className="flex flex-col gap-6">
          <label className="text-lg text-[#666666] font-medium leading-none">
            Topics
          </label>
          {/* Insctuctors Wrapper */}
          <div className="flex flex-wrap gap-2">
            {instructors.map((item) => (
              <FilterWrapper
                selected={instructorIds.includes(item.id)}
                huge={true}
                key={item.id}
                itemId={item.id}
                setId={setInstructorId}
                removeId={removeInstructorId}
              >
                <img
                  src={item.avatar}
                  alt="Instructor Avatar"
                  className="
                      h-7.5 w-7.5
                      rounded-sm object-cover
                  "
                />
                {item.name}
              </FilterWrapper>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
