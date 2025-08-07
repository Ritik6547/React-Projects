import { useState } from "react";

import CountriesList from "./CountriesList";
import Filter from "./Filter";
import Search from "./Search";
import { useTheme } from "../../hooks/useTheme";

function Home() {
  const [query, setQuery] = useState("");

  const [isDark] = useTheme();

  return (
    <main className={isDark ? "dark" : ""}>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <Filter />
      </div>

      <CountriesList query={query} />
    </main>
  );
}

export default Home;
