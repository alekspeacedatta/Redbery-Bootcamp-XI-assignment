import { useState, useRef, useEffect } from "react";
import { COURSE_SORT } from "../model/types";
import type { CoursesSort } from "../model/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SORT_LABELS: Record<CoursesSort, string> = {
  [COURSE_SORT.NEWEST]: "Newest First",
  [COURSE_SORT.POPULAR]: "Most Popular",
  [COURSE_SORT.PRICE_ASC]: "Price: Low to High",
  [COURSE_SORT.PRICE_DESC]: "Price: High to Low",
  [COURSE_SORT.TITLE_ASC]: "Title: A-Z",
};

type Props = {
  value: CoursesSort;
  onChange: (value: CoursesSort) => void;
};

export const SortSelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative ">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="
                    flex items-center gap-2 px-4 
                    h-12
                    border border-[#F5F5F5] rounded-[10px]
                    text-base font-medium text-[#666666] leading-6
                    cursor-pointer bg-white
                "
      >
        Sort By:
        <span className="text-[#4F46E5]">{SORT_LABELS[value]}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[#666666] text-sm"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
                    absolute right-0 top-full mt-1 z-50
                    bg-white border border-[#F5F5F5] rounded-[10px]
                    shadow-sm  py-1 overflow-hidden w-full
                "
        >
          {(Object.entries(SORT_LABELS) as [CoursesSort, string][]).map(
            ([sortValue, label]) => (
              <div
                key={sortValue}
                onClick={() => {
                  onChange(sortValue);
                  setOpen(false);
                }}
                className={`
                                px-4 py-2.5 text-base font-medium leading-6 cursor-pointer
                                transition-colors duration-200
                                hover:bg-[#DDDBFA]
                                ${value === sortValue ? "text-[#4F46E5] bg-[#DDDBFA]" : "text-[#666666]"}
                            `}
              >
                {label}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};
