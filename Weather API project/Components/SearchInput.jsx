const SearchInput = ({ inputCity, onChange, handleSearch }) => {
  return (
    <div className="search-input">
      <input
        value={inputCity}
        onChange={onChange}
        type="text"
        className="input"
        placeholder="Search City"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <i
        onClick={handleSearch}
        className="search-btn search-icon fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchInput;
