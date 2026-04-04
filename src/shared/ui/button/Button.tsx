import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "link";

type Props = {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: "text-white bg-[#4F46E5] rounded-lg disabled:bg-[#ADADAD] transition-colors duration-300",
  outline: "text-[#4F46E5] border border-[#958FEF] hover:bg-[#1E169D] hover:text-white rounded-lg transition-colors duration-300",
  link: "border-b border-[#4F46E5] text-[#4F46E5] transition-opacity hover:opacity-80",
};

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: Props) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-medium cursor-pointer
        disabled:cursor-default
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className} 
      `}
      {...props}
    >
      {children}
    </button>
  );
};
