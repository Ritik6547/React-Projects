export const StatsCard = ({ icon, count, label }) => {
  return (
    <div className="flex items-center gap-2 rounded-md bg-[#323232] px-8 py-3 shadow-md md:px-12">
      {icon}
      <p>{count}</p>
      <p>{label}</p>
    </div>
  );
};
