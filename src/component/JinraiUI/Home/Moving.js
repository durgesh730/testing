import React from "react";

const MovingBanner = ({title}) => {
  return (
    <div className="relative overflow-hidden h-20 flex items-center">
      <span className="mx-10 text-white">{title}</span>
    </div>
  );
};

export default MovingBanner;
