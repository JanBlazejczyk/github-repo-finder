import { useState } from "react";

import SearchBar from "./components/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("user");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleQueryTypeChange = (event) => {
    setQueryType(event.target.value);
  }


  return (
    <div className="App">
      <SearchBar
        handleInputChange={handleSearchQueryChange}
        handleRadioChange={handleQueryTypeChange}
        queryType={queryType}
      />
    </div>
  );
}

export default App;
