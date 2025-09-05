const FilterGroup = ({ title, showFilter, onChange, options, selected }) => {
  return (
    <div
      className={`mt-6 border border-gray-300 py-3 pl-5 sm:block ${showFilter ? "" : "hidden"}`}
    >
      <p className="mb-3 text-sm font-medium">{title.toUpperCase()}</p>
      <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
        {options.map((opt, index) => (
          <p key={index} className="flex gap-2">
            <input
              onChange={onChange}
              type="checkbox"
              value={opt}
              className="w-3"
              checked={selected.includes(opt)}
            />
            {opt}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
