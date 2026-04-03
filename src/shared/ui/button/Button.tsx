import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "link";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary:
    "text-white bg-[#4F46E5] rounded-lg disabled:bg-[#ADADAD] disabled:text-[#707070] disabled:cursor-none",
  outline:
    "text-[#4F46E5] border border-[#958FEF] hover:bg-[#1E169D] hover:text-[white] hover:border-[#1E169D] rounded-lg disabled:bg-[#ADADAD] disabled:text-[#707070] disabled:cursor-none",
  link: "border-b border-b-[#4F46E5] text-[#4F46E5] disabled:text-[#707070] disabled:cursor-none",
};

const sizeClasses: Record<Size, string> = {
  sm: "p-3 text-base",
  md: "py-3 px-4 text-xl",
  lg: "py-4.25 px-6.25 text-xl",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: Props) => {
  return (
    <button
      className={`
        font-medium leading-none cursor-pointer transition-colors duration-300
        
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
