import { StatsCard } from "./StatsCard";

const ProfileStats = () => {
  return (
    <div className="my-6 flex flex-col items-start gap-4 md:flex-row md:justify-between">
      <StatsCard
        count="2065"
        label="followers"
        icon={<i className="fa-solid fa-users text-[#A08FF8]"></i>}
      />
      <StatsCard
        count="0"
        label="following"
        icon={<i className="fa-solid fa-user-group text-[#A08FF8]"></i>}
      />
      <StatsCard
        count="40"
        label="repositories"
        icon={<i className="fa-solid fa-code-branch text-[#A08FF8]"></i>}
      />
    </div>
  );
};

export default ProfileStats;
