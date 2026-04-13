import { type ReactNode } from "react";

interface FileWrapperType {
  children: ReactNode;
  huge?: boolean;
  itemId: number;
  selected: boolean;
  setId: (id: number) => void;
  removeId: (id: number) => void;
}
export const FilterWrapper = ({
  children,
  setId,
  itemId,
  removeId,
  huge = false,
  selected,
}: FileWrapperType) => {
  return (
    <button
      className={`
            transition-colors duration-200 cursor-pointer
            font-medium leading-6 rounded-xl 
            ${huge ? "h-12" : "h-9.75"}
            flex items-center bg-white gap-2.5 px-3 border
            hover:bg-[#DDDBFA] hover:text-[#281ED2]
            ${selected ? "border-[#281ED2] text-[#281ED2]" : "text-[#666666]"}
        `}
      type="button"
      onClick={() => {
        if (selected) {
          removeId(itemId);
        } else {
          setId(itemId);
        }
      }}
    >
      {children}
    </button>
  );
};
