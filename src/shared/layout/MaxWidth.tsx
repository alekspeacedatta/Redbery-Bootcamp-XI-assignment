import React from "react";

type MaxWidthType = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidth = (props: MaxWidthType) => {
  return (
    <div className={`max-w-391.5 mx-auto ${props.className}`}>
      {props.children}
    </div>
  );
};

export default MaxWidth;
