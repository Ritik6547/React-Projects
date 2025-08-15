import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="font-roboto min-h-screen bg-[#EEEEEE]">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Home searchQuery={searchQuery} />
    </div>
  );
};

export default App;
