import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-regular-svg-icons";
import type { ReactNode, ChangeEvent } from "react";

type FileInputProps = {
  children: ReactNode;
  error?: boolean;
};

export const FileInput = ({ children, error }: FileInputProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const formatSize = (size: number) => {
    return `${Math.round(size / (1024 * 1024))}MB`;
  };

  return (
    <label
      className={`
        h-35 rounded-lg cursor-pointer
        flex items-center justify-center
        transition-colors duration-300
        ${ file &&  'bg-[#EEEDFC] border-[#DDDBFA] border-1.25'}
        ${error ? "border border-red-500" : "border border-[#D1D1D1]"}
        hover:bg-[#DDDBFA] hover:border-[#DDDBFA]
      `}
    >
      {!file ? (
        // EMPTY STATE
        <div className="flex flex-col items-center gap-2 ">
          <FontAwesomeIcon icon={faSadCry} className="text-[#ADADAD] text-3xl" />

          <div className="flex flex-col gap-1.5 items-center">
            <p className="text-sm text-[#666666] font-medium">
              Drag and drop or{" "}
              <span className="text-[#281ED2] underline">
                Upload file
              </span>
            </p>
            <p className="text-xs text-[#ADADAD]">
              JPG, PNG or WebP
            </p>
          </div>
        </div>
      ) : (
        // UPLOADED STATE
        <div className="flex items-center gap-2.5 w-full px-10">
          {/* Image */}
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-14 h-14 rounded-full object-cover shrink-0"
          />

          {/* Text column */}
          <div className="flex flex-col items-start min-w-0 flex-1">
            <p className="text-xs text-[#525252] leading-none line-clamp-1 break-all mb-0.5">
            {file.name}
            </p>

            <p className="text-[10px] text-[#ADADAD] leading-none">
            Size - {formatSize(file.size)}
            </p>

            <span
              className="text-[10px] text-[#4F46E5] mt-0.5 underline font-medium cursor-pointer"
            >
              Change
            </span>
          </div>
        </div>
      )}

      {/* Hidden input (from children) */}
      {children && (
        <div onChange={handleChange} className="hidden">
          {children}
        </div>
      )}
    </label>
  );
};