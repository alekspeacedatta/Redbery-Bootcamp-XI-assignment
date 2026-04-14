type PaginationButtonProps = React.ComponentProps<"button"> & {
  active?: boolean;
};

export const PaginationButton = ({
  children,
  active,
  className = "",
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      {...props}
      className={`
                ${className}
                h-10 w-10 rounded-sm border border-[#D1D1D1] text-[#4F46E5]
                bg-[#FFFFFF] cursor-pointer transition-colors duration-200
                hover:bg-[#DDDBFA] hover:border-[#B7B3F4] hover:text-[#4F46E5]
                focus:bg-[#281ED2] focus:border-[#4F46E5] focus:text-white
                ${active ? "bg-[#281ED2] border-[#4F46E5] text-white hover:bg-[#281ED2] hover:text-white" : ""}
                disabled:opacity-40 disabled:cursor-not-allowed font-medium disabled:text-[#DDDBFA]
            `}
    >
      {children}
    </button>
  );
};