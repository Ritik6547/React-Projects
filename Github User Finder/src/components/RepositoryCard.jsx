import React from "react";

export const RepositoryCard = ({ name, desc, lang, star, fork, date }) => {
  return (
    <div className="flex flex-col justify-between gap-8 rounded-md bg-[#323232] p-4 text-gray-400 shadow-md">
      <div>
        <h3 className="font-semibold text-[#A08FF8]">
          <i className="fa-solid fa-code-branch"></i> {name}
        </h3>
        <p className="mt-2 text-sm">
          {desc ? desc : "No description available"}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-circle text-[#A08FF8]"></i>
          <p>{lang ? lang : "Unknown"}</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-star text-[#A08FF8]"></i>
          <p>{star}</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-code-fork text-[#A08FF8]"></i>
          <p>{fork}</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-clock-rotate-left text-[#A08FF8]"></i>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
