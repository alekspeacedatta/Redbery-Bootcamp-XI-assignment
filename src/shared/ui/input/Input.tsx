import { faEye, type IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faEarDeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: IconDefinition
  prefix?: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", error = false, prefix,   className, icon, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const inputType = type === "password" 
      ? (isVisible ? "text" : "password") 
      : type;

    return (
      <div
        className={`
          border rounded-lg flex items-center pl-1.5 pr-3.75 text-sm
          has-disabled:bg-[#EBEBEB]
          ${error ? "border-red-500" : "border-[#D1D1D1] focus-within:border-[#8A8A8A]"}
          ${className || ""} 
        `}
      >
        {prefix && (
            <span className={`select-none pl-1 text-sm font-medium ${error ? 'text-red-500' : 'text-[#8A8A8A]'}`}>
                {prefix}
            </span>
        )}
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
        <button
           type="button"
           className=" ml-2"
        >
          {icon && <FontAwesomeIcon 
              icon={icon}
              className={`text-sm  ${ error ? 'text-red-500' : ' text-[#ADADAD] '} `}
          />}
        </button>
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
