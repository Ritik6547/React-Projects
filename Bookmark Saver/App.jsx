import Home from "./Components/Home";
import { BookmarkProvider } from "./contexts/BookmarkContext";

const App = () => {
  return (
    <BookmarkProvider>
      <Home />
    </BookmarkProvider>
  );
};

export default App;
