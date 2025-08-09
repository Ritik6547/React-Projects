import { RepositoryCard } from "./RepositoryCard";
import { formatDate } from "../utils/formatDate";

const RepositoryList = ({ repos }) => {
  return (
    <div className="">
      <h2 className="mt-2 border-b-2 border-[#323232] pb-4 text-xl font-bold">
        Latest Repositories
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {repos.slice(0, 6).map((repo) => {
          return (
            <RepositoryCard
              key={repo.id}
              name={repo.name}
              desc={repo.description}
              star={repo.stargazers_count}
              lang={repo.language}
              fork={repo.forks_count}
              date={formatDate(repo.created_at)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RepositoryList;
