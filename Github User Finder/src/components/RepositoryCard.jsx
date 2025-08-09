import React from "react";

export const RepositoryCard = () => {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-[#323232] p-4 text-gray-400 shadow-md">
      <div>
        <h3 className="font-semibold text-[#A08FF8]">
          <i className="fa-solid fa-code-branch"></i> as-a-programmer
        </h3>
        <p className="mt-2 text-sm">No desciption available</p>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-circle text-[#A08FF8]"></i>
          <p>JavaScript</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-star text-[#A08FF8]"></i>
          <p>8</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-code-fork text-[#A08FF8]"></i>
          <p>0</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-clock-rotate-left text-[#A08FF8]"></i>
          <p>Nov 19, 2024</p>
        </div>
      </div>
    </div>
  );
};
