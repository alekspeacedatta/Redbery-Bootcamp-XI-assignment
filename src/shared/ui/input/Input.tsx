import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEarDeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", error = false, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const inputType = type === "password" 
      ? (isVisible ? "text" : "password") 
      : type;

    return (
      <div
        className={`
          border rounded-lg flex items-center pl-1.5 pr-3.75 text-sm
          ${error ? "border-red-500" : "border-[#D1D1D1] focus-within:border-[#8A8A8A]"}
          ${className || ""} 
        `}
      >
        <input
          {...props}
          ref={ref}
          type={inputType}
          className={`
            w-full outline-0 caret-[#8A8A8A] pl-1 text-sm font-medium leading-none
            focus:placeholder:text-[#F5F5F5] 
            ${error ? "placeholder:text-red-500 text-red-500" : "placeholder:text-[#8A8A8A] text-[#3D3D3D]"}
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setIsVisible((p) => !p)}
            className="cursor-pointer ml-2"
          >
            <FontAwesomeIcon
              className={`text-sm ${ error ? 'text-red-500' : ' text-[#3D3D3D] '} `}
              icon={isVisible ? faEye : faEarDeaf}
            />
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
