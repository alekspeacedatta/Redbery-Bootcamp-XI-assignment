import React from "react";

type MaxWidthType = {
  children: React.ReactNode;
  className?: string;
};

export const MaxWidth = ( { children, className = "" }: MaxWidthType) => {
  return (
    <div className={`max-w-391.5 mx-auto ${className}`}>
      {children}
    </div>
  );
};