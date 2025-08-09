import React from "react";
import { RepositoryCard } from "./RepositoryCard";

const RepositoryList = () => {
  return (
    <div className="">
      <h2 className="mt-2 border-b-2 border-[#323232] pb-4 text-xl font-bold">
        Latest Repositories
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </div>
    </div>
  );
};

export default RepositoryList;
