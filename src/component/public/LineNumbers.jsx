import React from "react";

const LineNumbers = ({ lines }) => {
  return (
    <div className="px-4 text-[#868686]">
      {Array.from({ length: lines }, (_, index) => (
        <div key={index} className="line-number leading-[30px]">
          <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default LineNumbers;
