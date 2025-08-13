const Header = () => {
  return (
    <header className="flex gap-5 bg-white px-32 py-4 shadow-md">
      <div className="flex flex-1 items-center gap-3 rounded-md bg-[#EEEEEE] px-6 py-3 font-medium text-gray-900/85">
        <i className="fa-solid fa-magnifying-glass w-5"></i>
        <input
          className="w-full text-base placeholder-gray-700 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <button className="flex cursor-pointer items-center gap-1 rounded-3xl bg-[#42A5F5] px-4 py-3 font-medium text-white transition delay-150 hover:bg-[#2196F3]">
        <i className="fa-solid fa-plus"></i> <span>Add</span>
      </button>
    </header>
  );
};

export default Header;
