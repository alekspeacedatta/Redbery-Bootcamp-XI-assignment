import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEarDeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";

type InputSectionType = {
  type?: string;
  error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputSectionType>(
  ({ type = "text", error = false }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
      <div
        className={`
          border rounded-lg flex justify-center items-center py-2.5 pl-3.25 pr-3.75 text-sm
          ${error ? "border-red-500" : "border-[#D1D1D1] focus-within:border-[#8A8A8A]"}
        `}
      >
        <input
          ref={ref}
          type={!isVisible ? "text" : "password"}
          placeholder="Text"
          className={`
            outline-0 caret-[#8A8A8A] pl-1 text-sm font-medium leading-none
            focus:placeholder:text-[#F5F5F5]
            ${error ? "placeholder:text-red-500 text-red-500" : "placeholder:text-[#8A8A8A] text-[#3D3D3D]"}
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setIsVisible((p) => !p)}
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-sm text-[#3D3D3D]"
              icon={!isVisible ? faEye : faEarDeaf}
            />
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
